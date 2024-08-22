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
import {
  CreateNewCategory,
  Add,
  Cancel,
  CategoryName,
} from "../../../Utils/Constants";
import { Btn } from "../../../AbstractElements";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  addCategory,
  updateCategory,
} from "../../../ReduxToolkit/Reducers/ProductsReducer";
// import ToolbarBox from "../../AddProduct/ProductTabContents/Common/ToolbarBox";

export default function NewCategoryModal({ category, setCategory }) {
  const [tableform, setTableform] = useState({
    name: "",
  });
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    if (category?.term_id) {
      setTableform({ ...category });
      setModal(true);
    }
  }, [category]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSaveCategory = async () => {
    try {
      if (category?.term_id) {
        const result = await dispatch(updateCategory(tableform));
        if (result.payload.success) {
          toast.success("Category Updated Successfully");
        }
      } else {
        const result = await dispatch(addCategory(tableform));
        if (result.payload.success) {
          toast.success("Category Saved Successfully");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Error saving category");
    }
    setCategory({});
    toggle();
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
              setCategory({});
            }}
          >
            {Cancel}
          </Btn>
          <Btn color="primary" onClick={handleSaveCategory}>
            {Add}
          </Btn>
        </ModalFooter>
      </Modal>
    </Col>
  );
}
