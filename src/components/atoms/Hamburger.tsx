import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  z-index: 999;
  width: 1rem;
  height: 0.9rem;
  cursor: pointer;
`;

const Line = styled.span`
  width: inherit;
  height: 2px;
  position: absolute;
  background-color: #434c5e;
  transition: transform 0.2s ease-in-out;
  &:nth-of-type(1) {
    top: ${(p) => (!p['aria-hidden'] ? '6px' : '1px')};
    transform: ${(p) => !p['aria-hidden'] && 'rotate(135deg)'};
  }
  &:nth-of-type(2) {
    right: 0;
    width: ${(p) => (!p['aria-hidden'] ? 'inherit' : '1.3rem')};
    top: ${(p) => (!p['aria-hidden'] ? '6px' : '.6rem')};
    transform: ${(p) => !p['aria-hidden'] && 'rotate(-135deg)'};
  }
`;

const Hamburger = ({
  handleClick,
  hidden,
}: {
  handleClick: () => void;
  hidden: boolean;
}) => {
  return (
    <Container onClick={handleClick}>
      {Array(2)
        .fill(null)
        .map((_, i) => (
          <Line aria-hidden={hidden} key={i} />
        ))}
    </Container>
  );
};

export default Hamburger;
