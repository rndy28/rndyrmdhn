import styled from 'styled-components';

export const Title = styled.h2`
  color: #434c5e;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 1330px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: #434c5e;
  line-height: 1.3;
  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }
`;
