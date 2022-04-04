import Link from 'next/link';
import styled from 'styled-components';
import ROUTES from '../../libs/constants/routes';


const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: inherit;
    width: 78%;
    max-width: 50rem;
`;

const Items = styled.ul`
    min-height: inherit;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: .9rem;
    @media(min-width: 768px) {
        gap: 2rem;
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

    return (
        <Container>
            <Logo>rn.</Logo>
            <Items>
                {
                    ROUTES.map((text, idx) => (<Item key={idx}>
                        <Link href={`#${text}`}><a>{text}</a></Link>
                    </Item>))
                }
            </Items>
        </Container>
    );
};

export default Nav;