import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Add, Cancel } from "../../../Utils/Constants";
import { Btn } from "../../../AbstractElements";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { getVendorID } from "../../../services/helper";
import { addRegister } from "../../../ReduxToolkit/Reducers/AppReducer";
// import ToolbarBox from "../../AddProduct/ProductTabContents/Common/ToolbarBox";

export default function AddRegister() {
  const [tableform, setTableform] = useState({
    name: "",
  });
  const vendor_id = getVendorID();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSave = async () => {
    const formatedData = {
      ...tableform,
      vendor_id,
      biller_id: vendor_id,
    };
    try {
      const result = await dispatch(addRegister(formatedData));
      console.log(result);
      if (result.payload.success) {
        toast.success("Register Saved Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error saving Register");
    }
    toggle();
  };
  return (
    <Col xs={12}>
      <div>
        <Btn className="btn btn-primary" color="primary" onClick={toggle}>
          <i className="fa fa-plus me-2"></i> {"Add New Register"}
        </Btn>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add New Register</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <div>
              <Label>
                Initial Cash<span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.initial_cash}
                name="initial_cash"
                onChange={handleChange}
              />
            </div>
            {/* <ToolbarBox
              paragraph={"Improve product visibility by adding a compelling description."}
            /> */}
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
