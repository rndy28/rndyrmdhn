import { keyframes } from 'styled-components';

const slideBottom = keyframes`
    0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
`;

export {
    slideBottom
}