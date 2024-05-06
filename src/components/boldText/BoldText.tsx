interface BoldTextProps {
  text?: string;
  isBold?: boolean;
  children?: string;
}

const BoldText = (props: BoldTextProps) => {
  const { text, isBold, children } = props;

  return (
    <p style={{ fontWeight: isBold ? "600" : "400" }}>
      {text ? text : children}
    </p>
  );
};
export default BoldText;
