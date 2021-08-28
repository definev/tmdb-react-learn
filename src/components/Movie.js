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
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
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
            <MovieInfoBar budget={movie.budget} revenue={movie.revenue} time={movie.runtime} />
            <Grid>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        character={actor.character}
                        name={actor.name}
                        imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;
