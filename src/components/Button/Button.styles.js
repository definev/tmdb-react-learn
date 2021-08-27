
import styled from 'styled-components';

export const Wrapper = styled.button`
  /* display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  } */

  display: block;
  background: var(--darkGrey);
  height: 60px;
  width: 25%;
  min-width: 200px;
  border: 0;
  border-radius: 30px;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: opacity 0.3s;
  transition: color 0.3s;
  outline: none;
  cursor: pointer;
  color: var(--white);

  :hover {
    opacity: 0.8;
    color: #FF1345;
  }

  :focus {
    border-radius: 30px;
  }
`;
