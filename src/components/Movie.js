import React from 'react';
import { useParams } from 'react-router';

// Configs
import {
    IMAGE_BASE_URL,
    POSTER_SIZE
} from '../config';
// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

// Images
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const movieID = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieID.movieId);

    if (loading) return (<Spinner />);
    if (error) return (<div >Something went wrong ...</div>);

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} ></MovieInfo>
        </>
    );
};

export default Movie;
