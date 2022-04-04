import { AriaRole } from 'react';
import styled, { css } from 'styled-components';

type BaseCardExtended = Partial<{
    background: string;
    color: string;
    padding: string;
    role: AriaRole;
    className: string;
    onClick: (() => void);
    spacesBetweenStrokes: number;
    noBorderRadius: boolean;
    borderWidth: number;
    borderColor: string;
}>;

type BaseCardT = {
    children: React.ReactNode;
} & BaseCardExtended;



const Container = styled.div<BaseCardExtended>`
    background-color: ${props => props.background || 'transparent'};
    padding: ${({ padding }) => padding || '1rem'};
    color: ${({ color }) => color || '#4C566A'};
    position: relative;
    cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: ${({ spacesBetweenStrokes }) => spacesBetweenStrokes ? `translate(${spacesBetweenStrokes}px, ${spacesBetweenStrokes}px)` : 'translate(15px, 15px)'};
        transition: transform .3s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    &, &::before {
        border-style: solid;
        border-width: ${({ borderWidth }) => borderWidth + 'px' || '3px'};
        border-color: ${({ borderColor }) => borderColor || '#2E3440'};
        ${({ noBorderRadius }) => !noBorderRadius && css`
            border-radius: 0.4rem;
        `}
    }
    ${({ onClick }) => onClick && css`
        &:hover::before {
            background-color: aliceblue;
            transform: translate(0, 0);
        }
    `}
`;



function BaseCard({ children, ...props }: BaseCardT) {
    return (
        <Container role={props.role} className={props.className} onClick={props.onClick}  {...props}>
            {children}
        </Container>
    );
}


export default BaseCard;