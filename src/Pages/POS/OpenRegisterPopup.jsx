import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { getAPIURL, getUserID, getVendorID } from "../../services/helper";
import { toast } from "react-toastify";
import http from "../../services/http";
import {
  setLoading,
  addNewRegister,
} from "../../ReduxToolkit/Reducers/AppReducer";
import { useSelector } from "react-redux";

const OpenRegisterPopup = ({ handleRegisterSelection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register_id } = useSelector((state) => state.cart);
  const [initialCash, setInitialCash] = useState("");
  const dispatch = useDispatch();

  const biller_id = getUserID();
  const vendor_id = getVendorID();
  const api_url = getAPIURL();

  useEffect(() => {
    // Open the modal if no register is selected
    if (register_id === null) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [register_id]);

  const toggleModal = () => setIsOpen(!isOpen);

  const openRegister = async () => {
    if (!initialCash || initialCash <= 0) {
      toast.error("Please enter a valid initial amount.");
      return;
    }

    const payload = {
      initial_cash: parseFloat(initialCash),
      vendor_id,
      biller_id,
    };

    try {
      dispatch(setLoading(true));
      const { data: new_register } = await http.post(
        `${api_url}/open-register`,
        payload
      );

      setIsOpen(false);
      dispatch(setLoading(false));

      dispatch(addNewRegister(new_register));
      handleRegisterSelection(new_register); // Close the modal and update the parent component
    } catch (error) {
      toast.error("Failed to open register. Please try again.");
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Open a Register</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="initialCash">Initial Amount</Label>
            <Input
              type="number"
              id="initialCash"
              placeholder="Enter initial cash amount"
              value={initialCash}
              onChange={(e) => setInitialCash(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={openRegister}>
            Open Register
          </Button>
          <Button color="danger" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default OpenRegisterPopup;
