import { slideBottom } from 'libs/animations';
import useIntersectionObserver from 'libs/hooks/useIntersectionObserver';
import { useRef } from 'react';
import styled from 'styled-components';
import { Description, Title } from './shared';

const Container = styled.section<{ isVisible?: boolean }>`
  margin-block: 5rem;
  opacity: ${({ isVisible }) =>
    typeof isVisible !== 'undefined' && isVisible ? 1 : 0};
  animation-name: ${({ isVisible }) =>
    typeof isVisible !== 'undefined' && isVisible && slideBottom};
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-fill-mode: both;
  animation-delay: 0.2s;
  ${Title} {
    margin-bottom: 0.5rem;
    & ~ h3 {
      margin-bottom: 0.5rem;
      color: #434c5e;
    }
  }
`;

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
  max-width: 20rem;
  grid-row-gap: 0.4rem;
`;

const Item = styled.li`
  color: #434c5e;
`;

const techs = [
  'TypeScript',
  'React',
  'NextJS',
  'NodeJS',
  'ExpressJS',
  'MongoDB',
];

const About = () => {
  const elementRef = useRef<HTMLElement | null>(null);
  const isVisible = useIntersectionObserver(elementRef, {
    threshold: 0.3,
    once: true,
  });

  return (
    <Container id="about" ref={elementRef} isVisible={isVisible}>
      <Title>About Me</Title>
      <h3>Frontend Developer, and a Music Lover</h3>
      <Description>
        Rendy Farhan Ramadhan is a former student from Vocational High School
        State 1 of Central Jakarta (SMK Negeri 1 Jakarta). He&apos;s Live in the
        outskirts of Jakarta, Indonesia.
        <br />
        <br />
        Hobbies include: coding, staring at night sky for 20 minute, listening
        to the music same music over and over until he get bored, looking at
        minimalist art, and reading book.
        <br />
        <br />
        Technology that he&apos;s been working with recently:
      </Description>
      <Items>
        {techs.map((tech) => (
          <Item key={tech}>{tech}</Item>
        ))}
      </Items>
    </Container>
  );
};

export default About;
