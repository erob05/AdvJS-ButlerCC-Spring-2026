import { useState, useEffect } from 'react';
import { useTimer } from '../../hooks/useTimer';
import { useFetch } from '../../hooks/useFetch';
import './MovieQuotes.css';

const MovieQuotes = () => {
    // state to hold quotes and index of current quote; initalize index to 0
    // to show first quote immediately
    const [quotes, setQuotes] = useState([]);
    const [index, setIndex] = useState(0);  

    // get fetch function and loading/error state from custom hook
    const { fetchData, loading, error } = useFetch();

    // Fetch movie quotes on mount from local JSON file 
    useEffect(() => {
        loadQuotes();
    }, []);

    const loadQuotes = async () => {
        //await new Promise(resolve => setTimeout(resolve, 2000)); // simulate network delay
        // public folder is root for static assets in React 
        // so dont need to specify in the path
        const quotes = await fetchData("/movie_quotes.json");
        setQuotes(quotes);
    };

    // Advance the quote index every 5 seconds
    useTimer(() => {
        if (quotes && quotes.length > 0) {
            setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }
    }, 5000);

    // Handle loading and error states
    if (loading) return <p>Loading quotes...</p>;
    if (error) return <p>Unable to load quotes</p>;
    if (!quotes || quotes.length === 0) return <p>No quotes available.</p>;

    // Get the current quote based on the index
    const current = quotes[index];

    return (
        <div className="movie-quotes">
            <blockquote>
                “{current.quote}”
            </blockquote>
            <p>
                — <strong>{current.movie}</strong> ({current.year})
            </p>
        </div>
    );
};

export default MovieQuotes;