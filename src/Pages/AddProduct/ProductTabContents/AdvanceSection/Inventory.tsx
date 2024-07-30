import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { AdvanceCallBackProp } from "../../../../Types/ECommerce.type";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { customSwitchData } from "../../../../Data/Forms/FormWidgets";

export default function Inventory({ activeCallBack }: AdvanceCallBackProp) {
  const [formData, setFormData] = useState({
    cost: "",
    price: "",
    stock: "",
    price2: "",
    code: "",
    manage_stock: false,
  });
  const { cost, price, price2, stock, code, manage_stock } = formData;

  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNextButton = () => {
    if (cost !== "" && price !== "" && stock !== "" && price2 !== "" && code !== "") {
      activeCallBack(3);
    } else {
      toast.error("Please fill out details before moving on to the next step");
    }
  };

  return (
    <div>
      <Form id="advance-tab">
        <Row className="g-3 custom-input">
          <Col lg={4} sm={6}>
            <Label>
              <span>Product Code</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="code" value={code} onChange={updateFormData} />
          </Col>
          <Col lg={4} sm={6}>
            <Label>
              <span>Stock Quantity</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="stock" value={stock} onChange={updateFormData} />
          </Col>
          <Col md={5} lg={4}>
            <FormGroup check switch>
              <Input
                id="invalidCheck-n"
                required
                type="checkbox"
                name="manage_stock"
                checked={manage_stock}
                onChange={updateFormData}
              />
              <Label htmlFor="invalidCheck-n" check>
                {"Manage Stock Quantity"}
              </Label>
            </FormGroup>
          </Col>

          <Col lg={4} sm={6}>
            <Label>
              <span>Product Cost</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="cost" value={cost} onChange={updateFormData} />
          </Col>
          <Col lg={4} sm={6}>
            <Label>
              <span>Regular Price</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="price" value={price} onChange={updateFormData} />
          </Col>
          <Col lg={4} sm={6}>
            <Label>
              <span>Discount Price</span>
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="price2" value={price2} onChange={updateFormData} />
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
