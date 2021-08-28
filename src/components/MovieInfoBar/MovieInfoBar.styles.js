import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--darkGrey);
  margin: 0 auto;
  min-height: 100px;
  padding: 0px 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);

  @media screen and (max-width: 1000px) {
    display: block;
    .column {
      display: flex;
      background: var(--medGrey);
      height: 50px;
      justify-content: center;
      margin: 15px 0;

      p {
        justify-self: center;
      }
    }
  }

  .column {
    background: var(--medGrey);
    padding: 0 30px;
    border-radius: 20px;
  }
`;
