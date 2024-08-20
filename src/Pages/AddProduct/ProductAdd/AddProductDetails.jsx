import React, { ChangeEvent, useState, useCallback } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { ActiveCallbackProp } from "../../../Types/ECommerce.type";
import { ProductTitleLabel } from "../../../Utils/Constants";
import { Btn, P } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { PublishStatus } from "../../../Utils/Constants";
import { publishStatusItem } from "../../Common/Product";
import SelectCategory from "../ProductFormNav/SelectCategory";

export default function AddProductDetails({
  activeCallBack,
  product,
  onFormChange,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: [],
    status: "",
  });
  const [borderTab, setBorderTab] = useState(1);
  const activeBorder = useCallback((val) => {
    setBorderTab(val);
  }, []);
  const { productTitle } = formData;

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextButton = () => {
    if (productTitle !== "") {
      activeCallBack(2);
    } else {
      return toast.error(
        "Please fill out details before moving on to the next step"
      );
    }
  };

  return (
    <div className="sidebar-body">
      <Form id="advance-tab">
        <Row className="g-2">
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>
                Product Name <span className="txt-danger">{"*"}</span>
              </Label>
              <Input
                // className="is-invalid"
                type="text"
                name="name"
                value={product.name}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs={6} className="m-0">
            <FormGroup>
              <SelectCategory
                title={"Select Category"}
                onFormChange={onFormChange}
              />
            </FormGroup>
          </Col>
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>
                Product Stock <span className="txt-danger">{"*"}</span>
              </Label>
              <Input
                type="number"
                name="stock_quantity"
                value={product.stock_quantity}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>Regular Price</Label>
              <Input
                type="number"
                name="regular_price"
                value={product.regular_price}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>Discount Price</Label>
              <Input
                type="number"
                name="discount_price"
                value={product.discount_price}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label> Product Cost</Label>
              <Input
                type="number"
                name="product_cost"
                value={product.product_cost}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
          {/* <Inventory activeBorder={activeBorder} activeCallBack={activeCallBack} /> */}
          {/* <ToolbarBox paragraph={"Improve product visibility by adding a compelling description."} /> */}
        </Row>
      </Form>
      <div className="product-buttons">
        <Btn color="transparent" onClick={handleNextButton}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="front-arrow" /> {"Next"}
          </div>
        </Btn>
      </div>
    </div>
  );
}
