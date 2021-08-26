import React, { useState, useEffect, useRef } from 'react';

// Images
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSeachTerm }) => {
    const [text, setText] = useState('');
    const initial = useRef(false);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => setSeachTerm(text), 500);

        return () => clearTimeout(timer);
    });

    return <Wrapper>
        <Content>
            <img src={searchIcon} alt="seach-icon" />
            <input type="text"
                placeholder="Seach movie"
                onChange={props => setText(props.currentTarget.value)}
            />
        </Content>
    </Wrapper>
};

export default SearchBar;