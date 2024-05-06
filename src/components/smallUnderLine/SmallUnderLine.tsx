import { ReactNode } from "react";
import cls from "./smallUnderLine.module.css";
import classNames from "classnames";

interface SmallUnderLineProps {
  children: ReactNode;
  isBig?: boolean;
  isTitle?: boolean;
  whiteGray?: boolean;
}

const SmallUnderLine = (props: SmallUnderLineProps) => {
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

export default SmallUnderLine;
