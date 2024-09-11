/** @format */

import React, { useState, useCallback } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { Btn } from "../../../../AbstractElements";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import SelectCategory from "./SelectCategory";
import ToolbarBox from "../../../Common/ToolbarBox";
import ReactQuill from "react-quill";

export default function AddProductDetails({
  activeCallBack,
  product,
  onFormChange,
}) {
  const [borderTab, setBorderTab] = useState(1);
  const activeBorder = useCallback((val) => {
    setBorderTab(val);
  }, []);
  const { name } = product;

  const handleNextButton = () => {
    if (name !== "") {
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
                value={product.categories}
                onFormChange={onFormChange}
              />
            </FormGroup>
          </Col>
          <Col xs={12} className="m-0">
            <FormGroup>
              <Label>Product Description</Label>
              <ReactQuill
                style={{ height: "150px" }}
                value={product.description}
                onChange={(value) => onFormChange("description", value)}
              />
            </FormGroup>
          </Col>
          <Col xs={4} className="m-0">
            <FormGroup>
              <Label>Product Cost</Label>
              <Input
                type="number"
                name="product_cost"
                value={product.product_cost}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs={4} className="m-0">
            <FormGroup>
              <Label>Price</Label>
              <Input
                type="number"
                name="regular_price"
                value={product.regular_price}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs={4} className="m-0">
            <FormGroup>
              <Label>Discount Price</Label>
              <Input
                type="number"
                name="sale_price"
                value={product.sale_price}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col xs={6} className="m-0">
            <FormGroup>
              <FormGroup className="checkbox checkbox-primary mb-0" check>
                <Input
                  id="checkbox-primary-1"
                  type="checkbox"
                  name="manage_stock"
                  checked={product.manage_stock || false} // Handle the checkbox state
                  onChange={(e) =>
                    onFormChange(e.target.name, e.target.checked)
                  }
                />
                <Label htmlFor="checkbox-primary-1" check>
                  {"Enable Stock"}
                </Label>
              </FormGroup>

              {product.manage_stock && (
                <Input
                  type="number"
                  name="stock_quantity"
                  value={product.stock_quantity}
                  onChange={(e) => onFormChange(e.target.name, e.target.value)}
                />
              )}
            </FormGroup>
          </Col>
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
