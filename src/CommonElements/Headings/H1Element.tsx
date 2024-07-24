import { HeadingProps } from "../../Types/CommonElement.type";


function H1 (props: HeadingProps) {
  return <h1 {...props} style={props.style}>{props.children}</h1>;
};

export default H1;