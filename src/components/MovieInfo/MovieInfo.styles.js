import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')`
      : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieinfo 1s;

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 1000px) {
    display: block;
    max-height: none;
    align-items: center;
    justify-items: center;

    .Thumb {
      width: 100%;
      display: flex;
      padding: 40px 40px 0 40px;
      justify-content: center;
    }
  }
  
  @media screen and (max-width: 780px) {
    display: block;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    .Thumb {
      width: 100%;
      display: flex;
      padding: 0;
      justify-content: center;
    }
  }
`;

export const Text = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  
  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    background: #fff;
    color: #000;
    margin: 0;
    border-radius: 20px;
    font-weight: bold;
    font-size: var(--fontMed);
  }

  .director {
    display: block;
    margin-left: 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 780px) {
      font-size: var(--fontBig);
    }
  }
`;
