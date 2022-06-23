import React from 'react';
import styled from 'styled-components';

const Container = styled.figure<{ borderColor: string }>`
  position: relative;
  width: 13rem;
  height: 18rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(15px, 15px);
    transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    border: 6px solid ${(p) => p.borderColor};
    border-radius: 0.4rem;
  }
  @media (min-width: 650px) {
    width: 15rem;
    height: 20rem;
  }
  @media (min-width: 768px) {
    width: 16rem;
    height: 20rem;
  }
  @media (min-width: 1024px) {
    width: 19rem;
    height: 25rem;
  }
  & img {
    border-radius: 0.4rem;
  }
`;

const Title = styled.figcaption`
  @media (min-width: 768px) {
    position: absolute;
    left: -25px;
    right: 0;
    bottom: -4rem;
    height: fit-content;
    text-align: end;
    font-size: 0.8rem;
  }
  @media (min-width: 1024px) {
    bottom: -3rem;
  }
`;

interface FigureProps extends React.ComponentPropsWithoutRef<'figure'> {
    borderColor: string
}
interface FigCaptionProps
  extends React.ComponentPropsWithoutRef<'figcaption'> {}

const Figure = ({ children, ...rest }: FigureProps) => {
  return <Container {...rest}>{children}</Container>;
};

const FigCaption = ({ children, ...rest }: FigCaptionProps) => {
  return <Title {...rest}>{children}</Title>;
};

Figure.Caption = FigCaption;

export default Figure;
