import Styles from "./hamburger.module.scss";

type Props = {
  handleClick: () => void;
  toggled: boolean;
};

const Hamburger = ({ handleClick, toggled }: Props) => {
  return (
    <div
      onClick={handleClick}
      role="button"
      className={`${Styles["c-hamburger"]}  ${
        toggled ? Styles["toggled"] : ""
      }`}
    >
      {Array(2)
        .fill(null)
        .map((_, i) => (
          <span key={i} className={`${Styles["c-hamburger__line"]}`} />
        ))}
    </div>
  );
};

export default Hamburger;
