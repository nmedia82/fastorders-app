import React, { useState, ChangeEvent } from "react";
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
import { useDispatch } from "react-redux";
import {
  addNewTable,
  setLoading,
} from "../../../ReduxToolkit/Reducers/AppReducer";
import http from "../../../services/http";
import { getAPIURL, getVendorID } from "../../../services/helper";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Loader from "../../../Layout/Loader";
// import ToolbarBox from "../../AddProduct/ProductTabContents/Common/ToolbarBox";

export default function NewTableModal() {
  const [tableform, setTableform] = useState({
    title: "",
    description: "",
    serving_persons: 0,
  });
  const { isLoading } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTableform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleTableAdd = async () => {
    console.log(tableform);
    try {
      const api_url = getAPIURL();
      const vendor_id = getVendorID();
      toggle();
      dispatch(setLoading(true));
      const payload = { ...tableform, vendor_id };
      const { data: table } = await http.post(
        `${api_url}/create-table`,
        payload
      );

      dispatch(setLoading(false));
      if (!table.success) return toast.error(table.data.message);
      dispatch(addNewTable(table.data));
      toast.success("New Table is added");
    } catch (e: any) {
      dispatch(setLoading(false));
      toast.error(e.message);
    }
  };

  return (
    <Col xs={12}>
      {isLoading && <Loader />}
      <div>
        <Btn className="btn btn-primary" color="primary" onClick={toggle}>
          <i className="fa fa-plus me-2"></i> {"Add New Table"}
        </Btn>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add New Table</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <div>
              <Label>
                Table Name <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>
                Table Description <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="textarea"
                required
                value={tableform.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <Label>
                Table Serving Person <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="number"
                defaultValue={2}
                required
                value={tableform.serving_persons}
                name="serving_persons"
                onChange={handleChange}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Btn color="light" onClick={toggle}>
            {Cancel}
          </Btn>
          <Btn color="primary" onClick={handleTableAdd}>
            {Add}
          </Btn>
        </ModalFooter>
      </Modal>
    </Col>
  );
}
