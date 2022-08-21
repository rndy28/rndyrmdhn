import { useStore } from "@nanostores/react";
import Hamburger from "components/atoms/hamburger/Hamburger";
import ROUTES from "libs/constants/routes";
import { isNavOpen } from "libs/stores/navStore";
import Styles from "./nav.module.scss";

export default function Nav() {
  const toggled = useStore(isNavOpen);

  const onToggle = () => {
    isNavOpen.set(!toggled);
  };

  return (
    <nav className={Styles["c-nav"]}>
      <h2 className={Styles["c-nav__logo"]}>rn.</h2>
      <ul
        className={`${Styles["c-nav__list"]} ${
          toggled ? Styles["active"] : ""
        }`}
      >
        {ROUTES.map((route, idx) => (
          <li key={idx} className={Styles["c-nav__item"]}>
            <a href={`#${route}`}>{route}</a>
          </li>
        ))}
      </ul>
      <Hamburger handleClick={onToggle} toggled={toggled} />
    </nav>
  );
}
