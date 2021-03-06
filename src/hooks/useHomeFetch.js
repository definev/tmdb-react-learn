import { useState, useEffect } from "react";
// API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [searchTerm, setSeachTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load more
    useEffect(() => {
        if (!isLoadMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadMore(false);
    }, [isLoadMore, searchTerm, state.page]);

    return { state, loading, error, searchTerm, setSeachTerm, setIsLoadMore };
}