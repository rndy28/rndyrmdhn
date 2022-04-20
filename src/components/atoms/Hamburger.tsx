import styled from 'styled-components';


const Container = styled.div`
    position: relative;
    z-index: 999;
    width: 1rem;
    height: .9rem;
    cursor: pointer;
`;

const Line = styled.span<{ isOpen: boolean; }>`
    width: inherit;
    height: 2px;
    position: absolute;
    background-color: #434C5E;
    transition: all .2s ease-in-out;
    &:nth-of-type(1) {
        top: ${props => props.isOpen ? '6px' : '1px'};
        transform: ${({ isOpen }) => isOpen && 'rotate(135deg)'};
    }
    &:nth-of-type(2) {
        right: 0;
        width: ${props => props.isOpen ? 'inherit' : '1.3rem'};
        top: ${props => props.isOpen ? '6px' : '.6rem'};
        transform: ${({ isOpen }) => isOpen && 'rotate(-135deg)'};
    }
`;

const Hamburger = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean; }) => {
    return (
        <Container onClick={onClick}>
            {Array(2).fill(null).map((_, i) => (
                <Line key={i} isOpen={isOpen} />
            ))}
        </Container>
    );
};

export default Hamburger;