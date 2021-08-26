import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    width: 100%;
    height: 55px;
    position: relative;
    max-width: var(--maxWidth);
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);


    img {
        position: absolute;
        width: 30px;
        top: 15px;
        left: 15px;
    }

    input {
        position: absolute;
        left: 0px;
        width: 100%;
        font-size: 28px;
        border-radius: 40px;
        margin: 8px 0;
        padding-left: 60px;
        border: none;
        background: transparent;
        color: var(--white);
        :focus {
            outline: none;
            text-decoration-style: wavy;
        } 
    }
`;