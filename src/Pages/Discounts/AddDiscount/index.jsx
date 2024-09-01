import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import {
  CreateNewCategory,
  Add,
  Cancel,
  CategoryName,
} from "../../../Utils/Constants";
import { Btn } from "../../../AbstractElements";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addDiscount } from "../../../ReduxToolkit/Reducers/AppReducer";
import { getVendorID } from "../../../services/helper";

export default function AddDiscount() {
  const [tableform, setTableform] = useState();
  const dispatch = useDispatch();
  const vendor_id = getVendorID();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log("here");
  };
  const handleSave = async () => {
    const formatedData = await { ...tableform, vendor_id };
    try {
      const result = await dispatch(addDiscount(formatedData)).unwrap();
      if (result.data.success) {
        toast.success("Discount Saved Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error saving Discount");
    }
    toggle();
  };
  return (
    <Col xs={12}>
      <div>
        <Btn className="btn btn-primary" color="primary" onClick={toggle}>
          <i className="fa fa-plus me-2"></i> {"Add New Discount"}
        </Btn>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>New Discount</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <Row>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>Coupon Code</Label>
                  <Input
                    type="text"
                    name="coupon"
                    value={tableform?.coupon}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>Discount Ammount</Label>
                  <Input
                    type="number"
                    name="amount"
                    value={tableform?.amount}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>Discount Type</Label>
                  <Input
                    type="select"
                    name="discount_type"
                    onChange={(e) => handleChange(e)}
                    value={tableform?.discount_type}
                  >
                    <option value={"percent"}>Percent</option>
                    <option value={"fixed_cart"}>Fix Price</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="description"
                    value={tableform?.description}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>Usage Limit</Label>
                  <Input
                    type="number"
                    name="usage_limit"
                    value={tableform?.usage_limit}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
              <Col sm={6} className="m-0">
                <FormGroup>
                  <Label>Expiry Date</Label>
                  <Input
                    type="date"
                    name="expiry_date"
                    value={tableform?.expiry_date}
                    onChange={(e) => handleChange(e)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Btn
            color="light"
            onClick={() => {
              toggle();
            }}
          >
            {Cancel}
          </Btn>
          <Btn color="primary" onClick={handleSave}>
            {Add}
          </Btn>
        </ModalFooter>
      </Modal>
    </Col>
  );
}
