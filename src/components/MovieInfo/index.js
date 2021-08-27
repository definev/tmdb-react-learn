import React from 'react';
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
// Hooks

// Components
import Thumb from '../Thumb';
// Configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Images
import NoImage from '../../images/no_image.jpg';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Text></Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;