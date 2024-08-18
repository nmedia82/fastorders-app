import React, { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import { ProductTagProp } from "../../../Types/ECommerce.type";
import { Col, Label, Row } from "reactstrap";
import { useSelector } from "react-redux";

export default function SelectCategory({ title, onFormChange }) {
  const { categories } = useSelector((state) => state.products);
  const [selectData, setSelectData] = useState([]);
  console.log(categories);
  const [selectCategory, setSelectCategory] = [];

  useEffect(() => {
    const updatedSelectData = categories.map((cat) => ({
      label: cat.name,
      value: cat,
    }));
    setSelectData(updatedSelectData);
  }, [categories]);
  console.log(selectData);
  return (
    <Row className="g-2 product-tag">
      <Col xs={12}>
        <Label className="d-block">{title}</Label>
      </Col>
      <Col xs={12} className="m-0">
        <Select
          defaultValue={selectCategory}
          onChange={setSelectCategory}
          isMulti
          name="colors"
          options={selectData}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </Col>
    </Row>
  );
}
