import styled, { css } from 'styled-components';
import { IconMoon, IconSun } from '@tabler/icons';
import { useState } from 'react';



const LightIcon = styled(IconMoon)`
    position: absolute;
    top: 50%;
    /* left: 0;
    transform: translate(-50%, 0); */
    transition: transform .3s ease;
    /* opacity: 0;
    opacity: 1; */
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.2rem;
    height: 1.2rem;
`;


const Container = styled.div`
    border-radius: 0.5rem;
    min-height: 2.45rem;
    width: 2.45rem;
    background-color: #ECEFF4;
    cursor: pointer;
    position: relative;
`;

const ThemeMode = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return (
        <Container>
            <LightIcon/>
        </Container>
    );
};

export default ThemeMode;