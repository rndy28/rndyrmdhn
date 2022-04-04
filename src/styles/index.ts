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
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #ECEFF4;
    }

    ::-webkit-scrollbar-thumb {
        background: #434C5E;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #4C566A;
    }

    .section {
        margin-block: 8rem;
        &--intro {
            display: flex;
            flex-direction: column-reverse;
            min-height: 70vh;
            margin-block: 0;
        }
        &__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
            &--tech {
                grid-template-columns: repeat(2, 1fr);
                margin-top: 1rem;
                max-width: 20rem;
                color: #434C5E;
            }
            &--projects {
                margin-block:  2rem .5rem;
                gap: 3rem;
            }
        }
        &__inner  {
            margin-block: 1.2rem 1rem;
        }
        &__title,
        &__name {
            color: #434C5E;
        }
        &__sub-title {
            color: #5E81AC;
        }
        &__description {
            line-height: 1.2;
            color: #434C5E;
            &--mb-2 {
                margin-bottom: 2rem;
            } 
            &--mt-1 {
                margin-top: 1rem;
            }
        }
        @media(min-width: 768px) {
            &--intro {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                min-height: 80vh;
            }
            &__wrapper {
                width: 50%;
                max-width: 25rem;
            }
            &__inner {
                width: 100%;
            }
            &__title {
                font-size: 1.8rem;
            }
            &__sub-title {
                font-size: 1.2rem;
            }
            &__name {
                font-size: 2rem;
            }
        }
        @media(min-width: 1024px) {
            &__wrapper {
                width: 60%;
                max-width: 28rem;
                margin-top: 2rem;
            }
            &__title {
                font-size: 2rem;
            }
            &__sub-title {
                font-size: 1.5rem;
            }
            &__name {
                font-size: 2.5rem;
            }
            &__description {
                font-size: 1.1rem;
                line-height: 1.3;
            }
        }
        @media(min-width: 1200px) {
            &--intro {
                gap: 3rem;
            }
            &__wrapper {
                max-width: 30rem;
            }
            &__title {
                font-size: 2.2rem;
            }
            &__sub-title {
                font-size: 1.8rem;
            }
            &__name {
                font-size: 3rem;
                &--mb-1 {
                    margin-bottom: .3rem;
                }
            }
        }
    }
`;

export default Styles;