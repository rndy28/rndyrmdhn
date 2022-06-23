import styled from 'styled-components';

const Container = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #434c5e;
  color: #eceff4;
  border-radius: 0.4rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: background-color 250ms ease;
  @media (min-width: 768px) {
    width: 10rem;
    height: 2.7rem;
  }
  @media (min-width: 1024px) {
    width: 12rem;
    height: 3rem;
  }
  & > * {
    color: inherit;
  }
  &:hover {
    background-color: #4c566a;
  }
`;

interface Props extends React.ComponentPropsWithoutRef<'button'> {}

const Button = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
