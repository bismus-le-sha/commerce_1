"use client";

import cls from "./selectedText.module.css";
import { CSSProperties, ReactNode } from "react";

export interface SelectedTextProps {
  text?: string;
  children?: ReactNode;
  borderColor?: string;
  padding?: string;
  border?: CSSProperties["border"];
  textAlign?: CSSProperties["textAlign"];
  borderBottom?: CSSProperties["borderBottom"];
  isBorderBottom?: boolean;
  isBorder?: boolean;
  isBorderRadius?: boolean;
  borderRadius?: CSSProperties["borderRadius"];
  minHeight?: CSSProperties["minHeight"];
}

const SelectedText = (props: SelectedTextProps) => {
  const {
    text,
    children,
    borderColor,
    padding,
    textAlign = "center",
    borderBottom = "1px solid #000",
    border,
    isBorder = true,
    isBorderBottom = true,
    isBorderRadius,
    borderRadius = "30px",
    minHeight,
  } = props;

  const defaultBorderValue = "1px solid #000";
  const borderWithColor = borderColor
    ? defaultBorderValue.replace("#000", borderColor)
    : defaultBorderValue;
  const defaultBorder = isBorder && (border ? border : borderWithColor);
  const defaultBorderBottom = !isBorder && isBorderBottom;

  return (
    <div
      style={{
        borderColor: borderColor,
        padding,
        border: defaultBorder || "0",
        borderBottom:
          defaultBorderBottom || !isBorder ? borderBottom : borderBottom,
        textAlign,
        borderRadius: isBorderRadius ? borderRadius : "0",
        minHeight,
      }}
      className={cls.selectedTriangleText}
    >
      {children ? children : <p className={cls.selectedText}>{text}</p>}
    </div>
  );
};

export default SelectedText;
