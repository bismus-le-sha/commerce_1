import { ReactNode } from "react";
import cls from "./Title.module.css";
import classNames from "classnames";

interface TitleProps {
  isSubTitle?: boolean;
  text?: string;
  children?: ReactNode;
}

const Title = (props: TitleProps) => {
  const { isSubTitle = false, text, children } = props;
  const mods = {
    [cls.subTitle]: isSubTitle,
    [cls.title]: true,
  };
  return (
    <h2
      className={classNames(cls.title, mods)}
      style={{
        fontWeight: isSubTitle ? "600" : "800",
      }}
    >
      {children ? children : text}
    </h2>
  );
};

export default Title;
