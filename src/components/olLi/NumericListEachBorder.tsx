import { ReactNode } from "react";
import SelectedText, { SelectedTextProps } from "../selectedText/SelectedText";

interface NumericListEachBorderProps extends SelectedTextProps {
  items: ReactNode[];
  withTitle?: ReactNode[];
  borderColor?: string;
  padding?: string;
}

const NumericListEachBorder = (props: NumericListEachBorderProps) => {
  const { items, withTitle, padding, borderColor = "#000", ...other } = props;
  const defaultPaddingValue = "20px";
  const paddingValue = padding ? padding : defaultPaddingValue;
  return (
    <ol>
      {items.map((el, index) => {
        return (
          <>
            {withTitle && withTitle[index]}
            <SelectedText
              {...other}
              borderColor={borderColor}
              padding={paddingValue}
              isBorderRadius
              textAlign='left'
            >
              <li>{el}</li>
            </SelectedText>
          </>
        );
      })}
    </ol>
  );
};

export default NumericListEachBorder;
