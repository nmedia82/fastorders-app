import React, { ChangeEvent, useState, useCallback } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { ActiveCallbackProp } from "../../../Types/ECommerce.type";
import { ProductTitleLabel } from "../../../Utils/Constants";
import { Btn, P } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import ToolbarBox from "./Common/ToolbarBox";
import { AddCategory, PublishStatus } from "../../../Utils/Constants";
import { publishStatusItem } from "../../Common/Product";
import ProductTag from "./Common/ProductTag";
import NewCategoryModal from "./ProductCategories/NewCategoryModal";
import ProductDate from "./ProductCategories/ProductDate";
import Inventory from "./AdvanceSection/Inventory";

export default function AddProductDetails({ activeCallBack }: ActiveCallbackProp) {
  const [formData, setFormData] = useState({ productTitle: "", category: "", status: "" });
  const [borderTab, setBorderTab] = useState(1);
  const activeBorder = useCallback((val: number) => {
    setBorderTab(val);
  }, []);
  const { productTitle } = formData;
  const { category, status } = formData;

  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleNextButton = () => {
    if (productTitle !== "") {
      activeCallBack(2);
    } else {
      return toast.error("Please fill out details before moving on to the next step");
    }
  };

  return (
    <div className="sidebar-body">
      <Form id="advance-tab">
        <Row className="g-2">
          <Col xs={12} className="m-0">
            <Label>
              {ProductTitleLabel} <span className="txt-danger">{"*"}</span>
            </Label>
          </Col>
          <Col xs={12} className="custom-input">
            <Input
              className="is-invalid"
              type="text"
              name="productTitle"
              value={productTitle}
              onChange={updateFormData}
            />
          </Col>
          <Col xs={12}>
            <Row className="g-3">
              <NewCategoryModal />

              <Col sm={6}>
                <Row className="g-2">
                  <Col xs={12}>
                    <Label>{PublishStatus}</Label>
                    <Input type="select" name="status" value={status} onChange={updateFormData}>
                      {publishStatusItem.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </Input>
                    <P className="f-light">{"Choose the status"}</P>
                  </Col>
                </Row>
              </Col>
              <ProductTag title={"Add Category"} subTitle={true} />
            </Row>
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
