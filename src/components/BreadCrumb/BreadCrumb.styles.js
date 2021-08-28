import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white); */
  background: var(--medGrey);
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  
  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 780px) {
      font-size: 16px;
    }
  }

  /* display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: 1.2rem;
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 780px) {
      font-size: 16px;
    }
  } */
`;
