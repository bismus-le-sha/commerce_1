import { ReactNode } from "react";
import cls from "./fullUnderLine.module.css";
import classNames from "classnames";

interface FullUnderLineProps {
  children: ReactNode;
  isBig?: boolean;
  isTitle?: boolean;
  whiteGray?: boolean;
}

const FullUnderLine = (props: FullUnderLineProps) => {
  const { children, isBig = false, isTitle = false, whiteGray } = props;

  const paddingBottom = !isTitle ? (isBig ? "10px" : "5px") : "1px";

  return (
    <div
      style={{
        paddingBottom,
        marginBottom: "10px",
      }}
      className={classNames(cls.smallUnderLine, { [cls.whiteGray]: whiteGray })}
    >
      {children}
    </div>
  );
};

export default FullUnderLine;
