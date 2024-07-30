import React, { useState, ChangeEvent } from "react";
import { Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CreateNewCategory, Add, Cancel, CategoryName } from "../../../Utils/Constants";
import { Btn } from "../../../AbstractElements";
import ToolbarBox from "../../AddProduct/ProductTabContents/Common/ToolbarBox";

export default function NewCategoryModal() {
  const [tableform, setTableform] = useState({
    name: "",
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
          <i className="fa fa-plus me-2"></i> {"Add New Category"}
        </Btn>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add New Category</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <div>
              <Label>
                Category Name <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <ToolbarBox
              paragraph={"Improve product visibility by adding a compelling description."}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Btn color="light" onClick={toggle}>
            {Cancel}
          </Btn>
          <Btn color="primary" onClick={toggle}>
            {Add}
          </Btn>
        </ModalFooter>
      </Modal>
    </Col>
  );
}
