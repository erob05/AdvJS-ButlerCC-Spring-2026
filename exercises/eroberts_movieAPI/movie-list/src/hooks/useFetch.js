import { useState } from "react";

export const useFetch = () => {
    // state to manage loading status and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // function to perform the fetch
    const fetchData = async (url, options = {method: 'GET'}) => {
        setLoading(true);
        setError(null);
        try {
            //if (options.method === 'GET') throw new Error("Simulated network error");
            const response = await fetch(url, options);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 
                    `Fetch failed with status: ${response.status}`);
            }
            const data = await response.json();
            return data;       // success - return data object
        } 
        catch (err) {
            setError(err.message);     // save error message
            return null;       // failure - return null
            //throw err;         // failure - re-throw so caller can handle
        }
        finally {
            setLoading(false);         // set loading to false
        } 
    };

    // function to create an options object for fetch calls
    const createOptions = (method, body = null) => {
        const options = { method };
        if (body) {
            options.headers = { 'Content-Type': 'application/json' };
            options.body = JSON.stringify(body);
        }
        return options;
    };

    // return the functions and the loading and error state
    return { fetchData, createOptions, loading, error, setError };
};