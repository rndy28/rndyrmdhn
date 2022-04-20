import Hamburger from 'components/atoms/Hamburger';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import ROUTES from '../../libs/constants/routes';


const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: inherit;
    width: 78%;
    max-width: 50rem;
    position: relative;
    @media (min-width: 1200px) {
        max-width: 52rem;
    }
`;

const Items = styled.ul<{isOpen: boolean}>`
    position: absolute;
    left: 0;
    transition:  .3s ease-in-out;
    opacity: ${props => props.isOpen ? 1 : 0};
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    min-height: inherit;
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.8rem;
    font-size: .9rem;
    @media (min-width: 480px) {
        gap: 2rem;
    }
    @media (min-width: 650px) {
        position: relative;
        opacity: 1;
        transform: translateX(0);
        width: fit-content;
        & ~ div {
            display: none;
        }
    }
    @media(min-width: 768px) {
        gap: 2.5rem;
        font-size: 1rem;
    }
`;

const Item = styled.li`
    color: #434C5E;
    transition: color 0.3s ease-in-out;
    font-weight: 300;
    &:hover {
        color: #88C0D0;
    }
`;

const Logo = styled.h2`
    font-size: 1.2rem;
    color: #4C566A;
`;



const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <Logo>rn.</Logo>
            <Items isOpen={isOpen}>
                {
                    ROUTES.map((text, idx) => (<Item key={idx}>
                        <Link href={`#${text}`}><a>{text}</a></Link>
                    </Item>))
                }
            </Items>
            <Hamburger onClick={() => setIsOpen(c  => !c)} isOpen={isOpen}/>
        </Container>
    );
};

export default Nav;