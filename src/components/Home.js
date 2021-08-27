import React from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, } from '../config';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImg from '../images/no_image.jpg';

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSeachTerm,
        setIsLoadMore
    } = useHomeFetch();
    const loadMoreCallback = () => { 
        setIsLoadMore(true);
    }

    if (error) return <div>Something went wrong ...</div>;

    return (
        <>
            {
                state.results.length !== 0 && searchTerm === ''
                    ? <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].original_title}
                        text={state.results[0].overview} />
                    : null
            }
            <SearchBar setSeachTerm={setSeachTerm} />
            <Grid header={searchTerm ? "Search Results" : "List TV shows today"}>
                {
                    state.results.map(
                        movie => (
                            <Thumb
                                key={movie.id}
                                image={
                                    movie.poster_path
                                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path :
                                        NoImg
                                }
                                movieID={movie.id}
                                clickable />
                        )
                    )
                }
            </Grid>
            {loading ?? (<Spinner />)}
            {state.page < state.total_pages && !loading ? (<Button text="Load more" callback={loadMoreCallback} />) : (<Spinner />)}
        </>
    )
}

export default Home;