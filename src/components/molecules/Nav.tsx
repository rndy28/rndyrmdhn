import { useStore } from "@nanostores/react";
import Hamburger from "components/atoms/Hamburger";
import ROUTES from "libs/constants/routes";
import { isNavOpen } from "libs/stores/navStore";
import clsx from "clsx";

export default function Nav() {
  const toggled = useStore(isNavOpen);

  const onToggle = () => {
    isNavOpen.set(!toggled);
  };

  return (
    <nav className="flex items-center justify-between relative min-h-[inherit] w-full">
      <h2 className="text-polarNight2 text-xl font-semibold">rn.</h2>
      <ul
        className={clsx(
          "absolute left-0 transition-all duration-200 ease-in-out bg-white min-h-[inherit] w-full flex items-center gap-7 text-[0.9rem] min-[480px]:gap-8 min-[650px]:relative min-[650px]:opacity-100 min-[650px]:translate-x-0 min-[650px]:w-fit md:gap-10 md:text-base min-[900px]:gap-12",
          toggled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[20%]"
        )}
      >
        {ROUTES.map((route, idx) => (
          <li key={idx}>
            <a
              href={`#${route}`}
              className="text-polarNight2 text-base transition-colors duration-300 font-light hover:text-frost2"
            >
              {route}
            </a>
          </li>
        ))}
      </ul>
      <Hamburger handleClick={onToggle} pressed={toggled} />
    </nav>
  );
}
