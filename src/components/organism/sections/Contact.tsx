import { slideBottom } from 'libs/animations';
import useIntersectionObserver from 'libs/hooks/useIntersectionObserver';
import { useRef } from 'react';
import styled from 'styled-components';
import { Title, Description } from './shared';

const Container = styled.section<{isVisible: boolean | undefined}>`
    margin-block: 2rem;
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


const Contact = () => {
    const elementRef = useRef<HTMLElement | null>(null);
    const isVisible = useIntersectionObserver(elementRef, {
        threshold: 0.3,
        once: true
    });

    return (
        <Container id='contact' ref={elementRef} isVisible={isVisible}>
            <Title>Contact Me</Title>
            <Description>
                If you want to get in touch, you can find me on <a href='https://www.facebook.com/rendy.farhan02/' style={{ textDecoration: 'underline' }}>facebook</a>. Or you can email me if you preferred to
            </Description>
        </Container>
    );
};

export default Contact;