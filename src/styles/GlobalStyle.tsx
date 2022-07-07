import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Space Mono', monospace;
        min-height: 100vh;
    }
    p, span {
        font-family: 'Manjari', sans-serif;
        color: #4C566A;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
        margin-block: 0;
        color: #434C5E;
    }
    h1 {
        line-height: 1.1;
    }
    ul {
        list-style-type: none;
    }

    button, input {
        border: none;
        outline: none;
        font-family: 'Manjari', sans-serif;
        font-size: inherit;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #d1d1d1;
        border-radius: 1rem;
    }
`;

export default Styles;
