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
        font-family: 'Space Mono', 'JetBrains Mono', 'Roboto Mono', monospace;
        min-height: 100vh;
    }
    p, span {
        font-family: 'Manjari', sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
        margin-block: 0;
    }
    h1 {
        line-height: 1.1;
    }
    ul {
        list-style-type: none;
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