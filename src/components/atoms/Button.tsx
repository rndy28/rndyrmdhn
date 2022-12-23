import { Button as Btn } from "@nordice/core";
import IconMapper from "components/atoms/IconMapper";

const Button = () => {
  return (
    <Btn
      className="gap-2 font-manjari font-bold pt-[4px] w-full max-w-[10rem]"
      icon={{
        element: (
          <IconMapper
            name="upload"
            className="mb-[4px] h-[1.35rem] w-[1.35rem]"
          />
        ),
        placement: "end",
      }}
    >
      <a href="/resume.pdf" className="text-inherit">
        Resume
      </a>
    </Btn>
  );
};
export default Button;
