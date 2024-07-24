import { Fragment } from "react";
import { RibbonProps } from "../../Types/CommonElement.type";

function Ribbon (props: RibbonProps) {
  return (
    <Fragment>
      <div {...props}>{props.children}</div>
    </Fragment>
  );
};

export default Ribbon;