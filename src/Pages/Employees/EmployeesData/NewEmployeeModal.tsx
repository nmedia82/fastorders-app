import React, { useState, ChangeEvent } from "react";
import { Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { Link } from "react-router-dom";
import { Filter } from "react-feather";
import { Href } from "../../../Utils/Constants";

export default function NewEmployeesModal() {
  const [tableform, setTableform] = useState({
    first_name: "",
    last_name: "",
    phone_number1: "",
    phone_number2: "",
    address: "",
    city: "",
    status: "active",
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTableform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <Col xs={12}>
      <div>
        <Btn className="btn btn-primary" color="primary" onClick={toggle}>
          <i className="fa fa-plus me-2"></i> {"Add Employees"}
        </Btn>
      </div>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add Employees</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <div>
              <Label>
                First Name <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.first_name}
                name="first_name"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>
                Last Name <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.last_name}
                name="last_name"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>
                Phone Number 1 <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.phone_number1}
                name="phone_number1"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>
                Phone Number 2 <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.phone_number2}
                name="phone_number2"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>
                Address <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.address}
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>
                City <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.city}
                name="city"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>Status</Label>
              <Input className="m-0" type="text" disabled value={tableform.status} name="status" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Btn color="light" onClick={toggle}>
            Cancel
          </Btn>
          <Btn color="primary" onClick={toggle}>
            Add
          </Btn>
        </ModalFooter>
      </Modal>
    </Col>
  );
}
