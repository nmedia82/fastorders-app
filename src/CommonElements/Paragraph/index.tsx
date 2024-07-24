import { Fragment } from "react";
import { ParagraphProps } from "../../Types/CommonElement.type";

function P (props: ParagraphProps) {
  return (
    <Fragment>
      <p {...props} style={props.style}>{props.children}</p>
    </Fragment>
  );
};

export default P;