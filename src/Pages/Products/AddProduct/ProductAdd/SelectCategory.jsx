import React, { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import { Col, Label, Row } from "reactstrap";
import { useSelector } from "react-redux";

export default function SelectCategory({ title, onFormChange, value }) {
  const { categories } = useSelector((state) => state.products);
  const [selectData, setSelectData] = useState([]);
  useEffect(() => {
    const updatedSelectData = categories.map((cat) => ({
      label: cat.name,
      value: {
        id: cat.term_id,
        name: cat.name,
      },
    }));
    setSelectData(updatedSelectData);
  }, [categories]);
  const handleChange = (selected) => {
    const formated = selected.map((cat) => cat.value);
    console.log(formated);
    onFormChange("categories", formated);
  };
  const formattedValue = value.map((val) => ({
    label: val.name,
    value: val,
  }));
  console.log(value);
  console.log(selectData);
  return (
    <Row className="g-2 product-tag">
      <Col xs={12}>
        <Label className="d-block">{title}</Label>
      </Col>
      <Col xs={12} className="m-0">
        <Select
          // defaultValue={value}
          value={formattedValue}
          onChange={handleChange}
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
