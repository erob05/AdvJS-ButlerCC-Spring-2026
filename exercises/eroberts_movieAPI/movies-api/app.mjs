import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Bypass CORS for local development, do not use in production
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        response.sendStatus(200);
    } else {
        next();
    }
});

// Path to movies.json file
const moviesFile = path.join(__dirname, 'movies.json');

// Helper function to read movies from file
async function readMovies() {
    try {
        const data = await fs.readFile(moviesFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading movies file:', error);
        return [];
    }
}

// Helper function to write movies to file
async function writeMovies(movies) {
    try {
        await fs.writeFile(moviesFile, JSON.stringify(movies, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing movies file:', error);
        return false;
    }
}

// Helper function to validate movie data
function validateMovieData(data) {
    const errors = [];
  
    // Get raw data or defaults
    const name = data.name?.trim();
    const year = parseInt(data.year);
    const stars = data.stars !== undefined ? parseInt(data.stars) : 0;
    const order = data.order !== undefined ? parseInt(data.order) : 0;

    // Validate name
    if (!name) errors.push('Name is required');
    // Validate year
    const minYear = 1888;
    const maxYear = new Date().getFullYear() + 5;
    if (year === undefined || year === null || isNaN(year) || year < minYear || year > maxYear) {
        errors.push(`Year is required and must be between ${minYear} and ${maxYear}`);
    }
    // Validate stars
    if (isNaN(stars) || stars < 0 || stars > 5) errors.push('Stars must be 0-5');
    // Validate orders
    if (isNaN(order) || order < 0) errors.push('Order must be 0 or greater');

    return {
        isValid: errors.length === 0,
        errors: errors.join(';'),
        parsed: { name, year, stars, order }
    };
}

// GET / - API Documentation
app.get("/", (request, response) => {
    const documentation = {
        title: "Movies API Documentation",
        version: "1.0.0",
        description: "A RESTful API for managing a collection of movies.",
        baseURL: "http://localhost:2000",
        dataModel: {
            movie: {
                id: "integer (auto-generated)",
                name: "string (required)",
                year: "integer (required, 1888 - current year + 5)",
                stars: "integer (0-5, defaults to 0)",
                order: "integer (0 or greater, defaults to 0)"
            }
        },
        endpoints: [
            {
                method: "GET",
                path: "/movies",
                description: "Retrieve all movies"
            },
            {
                method: "GET",
                path: "/movies/:id",
                description: "Retrieve a specific movie by ID"
            },
            {
                method: "POST",
                path: "/movies",
                description: "Create a new movie"
            },
            {
                method: "PUT",
                path: "/movies/:id",
                description: "Update an existing movie"
            },
            {
                method: "DELETE",
                path: "/movies/:id",
                description: "Delete a specific movie"
            }
        ]
    };
    response.json(documentation);
});

// GET /movies - Get all movies
app.get('/movies', async (request, response) => {
    try {
        const movies = await readMovies();
        response.json(movies);
    } catch (error) {
        response.status(500).json({ error: 'Failed to retrieve movies' });
    }
});

// GET /movies/:id - Get movie with specified ID
app.get('/movies/:id', async (request, response) => {
    try {
        // Validate id in URL
        const movieId = parseInt(request.params.id);

        if (isNaN(movieId)) {
            return response.status(400).json({ error: 'Movie ID in URL must be a valid number' });
        }

        // Retrieve movie by id in URL
        const movies = await readMovies();
        const movie = movies.find((m) => m.id === movieId);

        if (!movie) {
            return response.status(404).json({ error: 'Movie not found' });
        }
        response.json(movie);
    } 
    catch (error) {
        response.status(500).json({ error: 'Failed to retrieve movie' });
    }
});

// POST /movies - Add a new movie
app.post('/movies', async (request, response) => {
    try {
        // Validate movie data
        const validation = validateMovieData(request.body);
        
        if (!validation.isValid) {
            return response.status(400).json({ error: validation.errors });
        }

        // Get validated movie data
        const { name, year, stars, order } = validation.parsed;

        // Generate new ID (find highest existing ID and add 1)
        const movies = await readMovies();
        const maxId = movies.reduce(
            (max, m) => (m.id > max ? m.id : max), 0
        );
        const newId = maxId + 1;
        
        // Create and append new movie
        const newMovie = { id: newId, name, year, stars, order };
        movies.push(newMovie);
        
        // Write back to file
        const writeSuccess = await writeMovies(movies);
        
        if (!writeSuccess) {
            return response.status(500).json({ error: 'Failed to add movie' });
        }
        
        response.status(201).json({
            message: 'Movie added successfully',
            movie: newMovie
        });
        
    } catch (error) {
        console.error('Error adding movie:', error);
        response.status(500).json({ error: 'Failed to add movie' });
    }
});

// PUT /movies - Update movie by id with data in request body
app.put('/movies/:id', async (request, response) => {
    try {
        // Validate id in URL
        const movieId = parseInt(request.params.id);

        if (isNaN(movieId)) {
            return response.status(400).json({ error: 'Movie ID in URL must be a valid number' });
        }

        // Retrieve movie by id in URL
        const movies = await readMovies();
        const movieIndex = movies.findIndex(m => m.id === movieId);

        if (movieIndex === -1) {
            return response.status(404).json({ error: 'Movie not found' });
        }

        // Validate request body (same as POST)
        const validation = validateMovieData(request.body);
        if (!validation.isValid) {
            return response.status(400).json({ error: validation.errors });
        }

        // Merge validated data into existing movie
        const updatedMovie = {
            ...movies[movieIndex],
            ...validation.parsed,
            id: movieId, // use id from URL, not from request body
        };

        const oldMovie = movies[movieIndex];
        movies[movieIndex] = updatedMovie;

        // Write the updated movies back to the file
        const writeSuccess = await writeMovies(movies);

        if (!writeSuccess) {
            return response.status(500).json({ error: 'Failed to update movie' });
        }

        response.json({
            message: 'Movie updated successfully.',
            newMovie: updatedMovie,
            previousMovie: oldMovie
        });
    } 
    catch (error) {
        console.error('Error updating movie:', error);
        response.status(500).json({ error: 'Failed to update movie' });
    }
});

// DELETE /movies/:id - Delete movie with specified ID
app.delete('/movies/:id', async (request, response) => {
    try {
        // Validate id in URL
        const movieId = parseInt(request.params.id);

        if (isNaN(movieId)) {
            return response.status(400).json({ error: 'Movie ID in URL must be a valid number' });
        }

        // Retrieve movie by id in URL
        const movies = await readMovies();
        const movieIndex = movies.findIndex(m => m.id === movieId);
        
        if (movieIndex === -1) {
            return response.status(404).json({ error: 'Movie not found' });
        }
        
        // Store the movie data before deletion (for response)
        const deletedMovie = movies[movieIndex];
        
        // Remove the movie from array
        movies.splice(movieIndex, 1);
        
        // Write back to file
        const writeSuccess = await writeMovies(movies);
        
        if (!writeSuccess) {
            return response.status(500).json({ error: 'Failed to delete movie' });
        }
        
        response.json({
            message: 'Movie deleted successfully',
            deletedMovie: deletedMovie
        });
    } 
    catch (error) {
        console.error('Error deleting movie:', error);
        response.status(500).json({ error: 'Failed to delete movie' });
    }
});

// listen for requests on port 2000 
app.listen(2000, () => {
    console.log("API listening on port 2000"); 
});

export default app;