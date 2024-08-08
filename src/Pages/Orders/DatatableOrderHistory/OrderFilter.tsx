import React from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { FilterComponentProps } from "../../../Types/ECommerce.type";
export default function OrderFilter({ onFilter, filterText }: FilterComponentProps) {
  return (
    <Row className="align-items-center ">
      <Col xs="auto">
        <Label>{"Search"}:</Label>
      </Col>
      <Col xs="auto" className="d-flex flex-row">
        <Input type="text" value={filterText} onChange={onFilter} placeholder="Filter by name" />
      </Col>
    </Row>
  );
}
