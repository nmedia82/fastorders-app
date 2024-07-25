import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { AdvanceCallBackProp } from "../../../../Types/ECommerce.type";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { PreOrder, RestockDate, Sku, StockQuantity } from "../../../../Utils/Constants";

export default function Inventory({ activeCallBack }: AdvanceCallBackProp) {
  const [formData, setFormData] = useState({
    ProductCost: "",
    ProductPrice: "",
    ProductStock: "",
    ProductCode: "",
  });
  const { ProductCost, ProductPrice, ProductStock, ProductCode } = formData;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "allowBackorders" ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="meta-body">
      <Form id="advance-tab">
        <Row className="g-3 custom-input">
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Cost</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="text" name="ProductCost" value={ProductCost} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Price</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input
              type="number"
              name="ProductPrice"
              value={ProductPrice}
              onChange={updateFormData}
            />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Stock</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input
              type="number"
              name="ProductStock"
              value={ProductStock}
              onChange={updateFormData}
            />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Code</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="ProductCode" value={ProductCode} onChange={updateFormData} />
          </Col>
        </Row>
        <div className="product-buttons"></div>
      </Form>
    </div>
  );
}
