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
    ${Description} h3 {
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
        once: true
    });

    return (
        <Container id='about' ref={elementRef} isVisible={isVisible}>
            <Title>About Me</Title>
            <Description>
                <h3>A Student, Frontend Developer, and a Music Lover</h3>

                Rendy Farhan Ramadhan is a student at Vocational High School State 1 of Central Jakarta (SMK Negeri 1 Jakarta). Live in outskirts of Jakarta, Indonesia.

                <br />
                <br />

                Hobbies include:
                coding,
                staring at night sky for 20 minute, 
                listening to the music same music over and over until he get bored, 
                looking at minimalist art,
                and reading book.
                <br />
                <br />
                Technology that he&apos;s been working with recently:
                <Items>
                    {techs.map((tech) => (<Item key={tech}>{tech}</Item>)) }
                </Items>
            </Description>
        </Container>
    );
};

export default About;