import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { AdvanceCallBackProp, ActiveBorderProp } from "../../../../Types/ECommerce.type";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { PreOrder, RestockDate, Sku, StockQuantity } from "../../../../Utils/Constants";
import { Btn } from "../../../../AbstractElements";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

export default function Inventory({ activeCallBack, activeBorder }: AdvanceCallBackProp) {
  const [formData, setFormData] = useState({
    cost: "",
    price: "",
    stock: "",
    price2: "",
    code: "",
    manage_stock: "",
  });
  const { cost, price, price2, stock, code, manage_stock } = formData;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "allowBackorders" ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleNextButton = () => {
    if (
      cost !== "" &&
      price !== "" &&
      stock !== "" &&
      price2 !== "" &&
      code !== "" &&
      manage_stock !== ""
    ) {
      activeCallBack(3);
    } else {
      return toast.error("Please fill out details before moving on to the next step");
    }
  };

  return (
    <div>
      <Form id="advance-tab">
        <Row className="g-3 custom-input">
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Cost</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="ProductCost" value={cost} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Price</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="ProductPrice" value={price} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              <span>Discount Price</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="DiscountPrice" value={price2} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Stock</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="ProductStock" value={stock} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              <span>Product Code</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="ProductCode" value={code} onChange={updateFormData} />
          </Col>

          <Col lg={3} sm={6}>
            <Label>
              <span>Manage Stock</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input
              type="number"
              name="ManageStock"
              value={manage_stock}
              onChange={updateFormData}
            />
          </Col>
        </Row>
      </Form>
      <div className="product-buttons">
        <Btn color="transparent" className="me-1" onClick={() => activeCallBack(1)}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="back-arrow" /> {"Previous"}
          </div>
        </Btn>
        <Btn color="transparent" onClick={handleNextButton}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="front-arrow" /> {"Next"}
          </div>
        </Btn>
      </div>
    </div>
  );
}
