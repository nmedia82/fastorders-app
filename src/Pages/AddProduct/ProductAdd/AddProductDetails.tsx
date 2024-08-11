import React, { ChangeEvent, useState, useCallback } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";
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
}: {
  activeCallBack: any;
  onFormChange: any;
  product: any;
}) {
  const [formData, setFormData] = useState({
    productTitle: "",
    category: "",
    status: "",
  });
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
              name="name"
              value={product.name}
              onChange={(e) => onFormChange(e.target.name, e.target.value)}
            />
          </Col>
          <Col xs={12}>
            <SelectCategory title={"Select Category"} />
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
