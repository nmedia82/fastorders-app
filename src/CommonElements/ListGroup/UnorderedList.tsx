import { Fragment } from "react";
import { ListGroup } from "reactstrap";
import { UnorderedListProps } from "../../Types/CommonElement.type";


function UL(props: UnorderedListProps) {
  return (
    <Fragment>
      <ListGroup {...props}>{props.children}</ListGroup>
    </Fragment>
  );
};

export default UL;