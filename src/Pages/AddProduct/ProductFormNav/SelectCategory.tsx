import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import { ProductTagProp } from "../../../Types/ECommerce.type";
import { Col, Label, Row } from "reactstrap";

export default function SelectCategory({ title }: ProductTagProp) {
  const categorys = [
    { value: "bags", label: "Bags" },
    { value: "clothing", label: "Clothing" },
    { value: "accessories", label: "Accessories" },
    { value: "electronic", label: "Electronic" },
  ];
  const [selectCategory, setSelectCategory] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(null);

  return (
    <Col sm={6}>
      <Row className="g-2 product-tag">
        <Col xs={12}>
          <Label className="d-block m-0">{title}</Label>
        </Col>
        <Col xs={12}>
          <Select
            defaultValue={selectCategory}
            onChange={setSelectCategory}
            isMulti
            name="colors"
            options={categorys}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </Col>
      </Row>
    </Col>
  );
}
