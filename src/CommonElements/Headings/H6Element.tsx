import { HeadingProps } from "../../Types/CommonElement.type";

function H6(props: HeadingProps) {
  return <h6 {...props} style={props.style}>{props.children}</h6>;
};

export default H6;