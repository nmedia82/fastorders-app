import { HeadingProps } from "../../Types/CommonElement.type";

function H2 (props: HeadingProps) {
  const { children = "" } = props;
  return <h2 {...props} style={props.style}>{children}</h2>;
};

export default H2;