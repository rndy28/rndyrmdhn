import clsx from "clsx";

type Props = {
  handleClick: () => void;
  pressed: boolean;
};

const line =
  "w-inherit h-[2px] absolute bg-polarNight1 transition-all duration-200 ease-in";

const Hamburger = ({ handleClick, pressed }: Props) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="relative z-10 w-4 h-[0.9rem] cursor-pointer min-[650px]:hidden"
      onClick={handleClick}
    >
      <span
        className={clsx(
          line,
          pressed ? "top-[6px] rotate-[135deg]" : "top-[1px] w-[1.3rem] right-0"
        )}
      />
      <span
        className={clsx(
          line,
          pressed ? "top-[6px] -rotate-[135deg] w-inherit" : "top-[0.6rem]"
        )}
      />
    </div>
  );
};

export default Hamburger;
