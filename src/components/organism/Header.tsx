import Nav from 'components/molecules/Nav';
import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 5rem;
`;

const Header = () => {
    return (
        <Container>
            <Nav/>
        </Container>
    );
};

export default Header;