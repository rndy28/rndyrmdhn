import { slideBottom } from 'libs/animations';
import useIntersectionObserver from 'libs/hooks/useIntersectionObserver';
import { useRef } from 'react';
import styled from 'styled-components';
import { Description, Title } from './shared';


const Container = styled.section<{ isVisible: boolean | undefined; }>`
    margin-block: 5rem;
    opacity: ${({ isVisible }) => typeof isVisible !== 'undefined' && isVisible ? 1 : 0};
    animation-name: ${({ isVisible }) => typeof isVisible !== 'undefined' && (isVisible && slideBottom)};
    animation-duration: .8s;
    animation-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
    animation-fill-mode: both;
    animation-delay: .2s;
    ${Title} {
        margin-bottom: .5rem;
    }
`;

const Items = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1rem;
    max-width: 20rem;
    grid-row-gap: .4rem;
`;

const Item = styled.li`
    color: #434C5E;
`;

const About = () => {
    const elementRef = useRef<HTMLElement | null>(null);
    const isVisible = useIntersectionObserver(elementRef, {
        threshold: 0.3,
        once: true
    });

    return (
        <Container id='about' ref={elementRef} isVisible={isVisible}>
            <Title>About Me</Title>
            <Description>
                Hello There 👋, My name is Rendy Farhan Ramadhan and  I&apos;m a student from Jakarta, Indonesia. I&apos;m a passionate web developer who loves to create things.
                Although in the first semester of my high school life i was not so interested in programming, because when i go into that high school its just because its free of charge.
                <br />
                <br />
                Then after my first semester is done, I think about my future more seriously and i started to learn programming. Although at first i struggled with it, but after a while i started to understand it.
                Fast forward to today i&apos;m still learning new things and I&apos;m still trying to learn more about programming.
                <br />
                <br />
                Here are some of programming languages(and frameworks) that i&apos;ve been working with recently:
            </Description>
            <Items>
                <Item>Javascript</Item>
                <Item>TypeScript</Item>
                <Item>React</Item>
                <Item>Node.js</Item>
                <Item>Express</Item>
                <Item>MongoDB</Item>
            </Items>
        </Container>
    );
};

export default About;