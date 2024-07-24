import { HeadingProps } from "../../Types/CommonElement.type";

function H4(props: HeadingProps) {
  const { children = "" } = props;
  return <h4 {...props} style={props.style}>{children}</h4>;
};

export default H4;