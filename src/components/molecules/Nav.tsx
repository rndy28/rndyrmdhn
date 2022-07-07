import Hamburger from "components/atoms/Hamburger";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ROUTES from "libs/constants/routes";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: inherit;
  position: relative;
  width: inherit;
`;

const Items = styled.ul`
  position: absolute;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(p) => (!p["aria-hidden"] ? 1 : 0)};
  transform: translateX(${(p) => (!p["aria-hidden"] ? "0" : "-100%")});
  min-height: inherit;
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.8rem;
  font-size: 0.9rem;
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
  @media (min-width: 768px) {
    gap: 2.5rem;
    font-size: 1rem;
  }
  @media (min-width: 900px) {
    gap: 3rem;
  }
`;

const Item = styled.li`
  color: #434c5e;
  transition: color 0.3s ease-in-out;
  font-weight: 300;
  &:hover {
    color: #88c0d0;
  }
`;

const Logo = styled.h2`
  font-size: 1.2rem;
  color: #4c566a;
`;

const Nav = () => {
  const [hidden, setHidden] = useState(true);

  const onMenuClick = () => {
    setHidden((c) => !c);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 650) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, []);

  return (
    <Container>
      <Logo>rn.</Logo>
      <Items aria-hidden={hidden}>
        {ROUTES.map((text, idx) => (
          <Item key={idx}>
            <Link href={`#${text}`}>
              <a>{text}</a>
            </Link>
          </Item>
        ))}
      </Items>
      <Hamburger handleClick={onMenuClick} hidden={hidden} />
    </Container>
  );
};

export default Nav;
