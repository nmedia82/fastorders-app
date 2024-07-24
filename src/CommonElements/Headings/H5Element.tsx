import { HeadingProps } from "../../Types/CommonElement.type";

function H5(props: HeadingProps) {
  return <h5 {...props} style={props.style}>{props.children}</h5>;
};
export default H5;