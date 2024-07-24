import { HeadingProps } from "../../Types/CommonElement.type";

function H3 (props: HeadingProps) {
  const { children = "" } = props;
  return <h3 {...props} style={props.style}>{children}</h3>;
};

export default H3;