import { useState, useEffect, useRef } from 'react'
import { useFetch } from './hooks/useFetch';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

import MovieList from './components/movies/MovieList';
import MovieForm from './components/movies/MovieForm';
import MovieQuotes from './components/movies/MovieQuotes';
import './App.css';

// app name to display in the header and footer
const appName = 'ER Movies';

// base URL for movies API
const API_URL = 'http://localhost:2000';

const App = () => {
    const [movies, setMovies] = useState([]); 
    const [selectedMovie, setSelectedMovie] = useState(null);   

    // get fetch functions and loading/error state from custom hook
    const { fetchData, createOptions, loading, error, setError } = useFetch();

    // ref to hold the original movie object (for concurrency check)
    const origMovie = useRef(null);

    // load movies from API when component mounts 
    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        const movies = await fetchData(`${API_URL}/movies`);
        if (movies) {
            // sort by order property before storing
            const sorted = [...movies].sort((a, b) => (a.order) - (b.order));
            setMovies(sorted);
        }
    };

    /* event handlers for movie operations */
    
    // add a new movie 
    const handleAdd = async (movieToAdd) => {
        // add order property based on highest order in movies
        const highestOrder = movies.reduce((max, m) => Math.max(max, m.order), -1);
        const movieWithOrder = {...movieToAdd, order: highestOrder + 1};
        // add to API on server
        const options = createOptions('POST', movieWithOrder);
        const response = await fetchData(`${API_URL}/movies`, options);

        // add to local state on client if successful
        if (response) {
            setMovies((prev) => [...prev, response.movie]);
        }
    };

    // delete a movie from the list and API
    const handleDelete = async (id) => {
        // delete from API on server
        const options = createOptions('DELETE');
        const response = await fetchData(`${API_URL}/movies/${id}`, options);

        // delete from local state on client if successful
        if (response) {
            setMovies((prev) => prev.filter((movie) => movie.id !== id));
            setSelectedMovie(null);
        }
    };

    // concurrency check
    const confirmConcurrency = async (movieToUpdate) => {
        // replace this statement with concurrency code
        // return true; 
        const latest = await fetchData(`${API_URL}/movies/${movieToUpdate.id}`);
        if (!latest) return false;

        // get original movie from ref
        const original = origMovie.current;
        // compare data to see if anything has changed since selection
        const hasChanged = 
        latest.name !== original.name  || latest.year !== original.year;
        // use window.confirm to notify user and see if they want to overwrite
        // data on the server (don't need useEffect bc called by event handler)
        if (hasChanged) {
            return window.confirm(
                'This movie was modified since you loaded it. \n' + `Data on the server: ${latest.name} (${latest.year})\n` + 'Overwrite the data on the server?'
            );
        } else {
            return true;
        }
    };

    // update a movie after editing in the list and API
    const handleEdit = async (movieToUpdate) => {
        // only update if concurrency check successful
        if (await confirmConcurrency(movieToUpdate)) {

            // update in API on server
            const options = createOptions('PUT', movieToUpdate);
            const response = await fetchData(`${API_URL}/movies/${movieToUpdate.id}`, options);

            // update in local state on client if successful
            if (response) {
                setMovies((prev) =>
                    prev.map((movie) =>
                        movie.id === movieToUpdate.id ? movieToUpdate : movie
                    )
                );            
                setSelectedMovie(null);
            }
        }
    };    

    // select a movie and specify mode: 'edit' or 'delete'
    const handleSelect = (movie, mode) => {
        setSelectedMovie({...movie, mode});

        // save copy of selected movie
        origMovie.current = {...movie};
    };

    // cancel edit or delete
    const handleCancel = () => {
        setSelectedMovie(null);
    };

    // reorder movies after drag and drop (doesn't update API)
    //Make sure this can run asynchronously
    const handleReorder = async (fromMovie, toMovie) => {
        // don't do anything if no movies or same movie
        if (!fromMovie || !toMovie || fromMovie.id === toMovie.id) return;

        // get the indexes of the movies
        const fromIndex = movies.findIndex(m => m.id === fromMovie.id);
        const toIndex = movies.findIndex(m => m.id === toMovie.id);

        // if neither index is found, return previous state
        if (fromIndex === -1 || toIndex === -1) return prev;

        // copy movies state 
        const updated = [...movies];  

        // reorder by removing the from movie
        // and inserting it at the to index
        const [moved] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, moved);

        // assign a new order value based on position in array
        const ordered = updated.map((movie, index) => ({
            ...movie, 
            order: index
        }));
        // determine which movies actually changed order (for API update) 
        const apiUpdates = ordered.filter(
            (movie) => movie.order !== movies.find(m => m.id === movie.id)?.order
        );
        // update the movies state
        setMovies(ordered);

        // update the API
        // don't do anything if no updates
        if (apiUpdates.length === 0) return;
        // flag to track if API updates successful
        let isResponseOK = true;
        for (const movie of apiUpdates) {
            const options = createOptions('PUT', movie);
            const response = await fetchData(`${API_URL}/movies/${movie.id}`, options);
            if (!response) isResponseOK = false;
        }
    };

    return (
        <div className="container">
            <Header text={appName} />
            <Main>
                {loading && <p>Loading movies...</p>}
                {error && (
                    <div className="error-message">
                        {error} <button onClick={loadMovies}>Reload</button>
                    </div>
                )}
                {!loading && !error && 
                    <MovieList 
                        movies={movies} 
                        onSelect={handleSelect} 
                        onReorder={handleReorder}  
                    />
                }
            </Main>
            <Sidebar>
                <MovieForm 
                    selectedMovie={selectedMovie}
                    onAdd={handleAdd} 
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onCancel={handleCancel}
                />
            </Sidebar>
            <Footer text={appName} >
                <MovieQuotes />
            </Footer>
        </div>
    )
}

export default App;