import styled from 'styled-components';

export const Image = styled.img`
  height: 100%;
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animatedImage 0.5s;

  :hover {
    opacity: 0.7;
  }

  @keyframes animatedImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
