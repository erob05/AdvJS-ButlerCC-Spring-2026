import { useEffect, useRef } from 'react';

export const useTimer = (onTick, tickInterval) => {
    // Use a ref to store the latest version of the onTick function 
    const latestOnTick = useRef(onTick);

    // Update the ref whenever onTick changes
    useEffect(() => {
        latestOnTick.current = onTick;
    }, [onTick]);

    // Set up the interval timer
    useEffect(() => {
        // Do nothing if tickInterval is not provided
        if (tickInterval == null) return;

        // call the latest onTick function every tickInterval milliseconds
        const id = setInterval(() => {
            latestOnTick.current();
        }, tickInterval);

    }, [tickInterval]);  // dependency - tickInterval changes
};