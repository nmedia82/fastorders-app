import { useState, useEffect } from "react";
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
import {
  addPaymentType,
  updatePaymentType,
} from "../../../ReduxToolkit/Reducers/AppReducer";
import { getVendorID } from "../../../services/helper";
// import ToolbarBox from "../../AddProduct/ProductTabContents/Common/ToolbarBox";

export default function AddNewModal({ paymentType, setPaymentType }) {
  const [tableform, setTableform] = useState({
    title: "",
  });
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    if (paymentType?.id) {
      setTableform({ ...paymentType });
      setModal(true);
    }
  }, [paymentType]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSave = async () => {
    const data = {
      ...tableform,
      vendor_id: getVendorID(),
    };
    try {
      if (paymentType?.id) {
        const result = await dispatch(updatePaymentType(data));
        if (result.payload.success) {
          toast.success("PaymentType Updated Successfully");
        }
      } else {
        const result = await dispatch(addPaymentType(data));
        if (result.payload.success) {
          toast.success("PaymentType Saved Successfully");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Error saving PaymentType");
    }
    setPaymentType({});
    toggle();
  };
  return (
    <Col xs={12}>
      <div>
        <Btn className="btn btn-primary" color="primary" onClick={toggle}>
          <i className="fa fa-plus me-2"></i> {"Add New Payment Type"}
        </Btn>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add New Payment Type</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <div>
              <Label>
                Title <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform?.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>
                Description <span className="txt-danger">*</span>
              </Label>
              <Input
                className="m-0"
                type="text"
                required
                value={tableform?.description}
                name="description"
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
              setPaymentType({});
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
