import Link from 'next/link';
import styled from 'styled-components';
import BaseCard from './shared/BaseCard';

type ButtonProps = {
  text: string;
  background?: string;
  color?: string;
  href?: string;
  className?: string;
  onClick?: (() => void);
}

const Container = styled(BaseCard) <{ color?: string; }>`
  width: 8rem;
  height: 2.5rem;
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px) {
    width: 10rem;
    height: 2.7rem;
  }
  @media(min-width: 1024px) {
    width: 12rem;
    height: 3rem;
  }
`;

const Button = ({
  text,
  background,
  color,
  href,
  className,
  onClick }: ButtonProps) => {
  return (
    <Container
      role='button'
      className={className}
      background={background}
      borderColor={background}
      color={color}
      onClick={onClick}
      spacesBetweenStrokes={10}
      noBorderRadius
      >
      {href ? <Link href={href}><a>{text}</a></Link> : <span>{text}</span>}
    </Container>
  );
};

export default Button;