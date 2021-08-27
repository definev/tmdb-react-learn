import React, { useState, useEffect, useCallback } from 'react';
import API from '../API';

export const useMovieFetch = movieID => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieID);
            const credit = await API.fetchCredits(movieID);

            const directors = credit.crew.filter(
                member => member.job === 'Director'
            );

            setState({
                ...movie,
                actors: credit.cast,
                directors,
            });

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchData();
    }, [movieID]);

    return { state, loading, error };
};