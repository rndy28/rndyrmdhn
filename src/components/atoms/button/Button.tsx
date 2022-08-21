import type { ComponentPropsWithoutRef } from "react";
import Styles from "./button.module.scss";

type PropsLink = ComponentPropsWithoutRef<"a"> & {
  asLink: boolean;
};

type PropsButton = ComponentPropsWithoutRef<"button">;

const Button = ({ children, ...rest }: PropsLink | PropsButton) => {
  if ("asLink" in rest) {
    const { asLink, ...props } = rest;
    return (
      <a className={`${Styles["c-btn"]} ${Styles["c-btn--resume"]}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button
      className={`${Styles["c-btn"]} ${Styles["c-btn--resume"]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
