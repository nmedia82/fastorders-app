import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";
import FilterComponent from "../../Components/Applications/ECommerce/Common/FilterComponent";
import { useSelector, useDispatch } from "react-redux";
import http from "../../services/http";
import { getAPIURL } from "../../services/helper";
import { toast } from "react-toastify";
import { updateRegister } from "../../ReduxToolkit/Reducers/AppReducer";
import { setOpenRegister } from "../../ReduxToolkit/Reducers/CartReducer";

export default function ListTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [closingCash, setClosingCash] = useState("");
  const [selectedRegister, setSelectedRegister] = useState(null);

  const categoryColumns = [
    {
      name: "ID",
      selector: (row) => row?.id,
      sortable: true,
      cell: (row) => <p>{row?.id}</p>,
      width: "10%",
    },
    {
      name: "Title",
      selector: (row) => row?.title,
      sortable: true,
      cell: (row) => <p>{row?.title}</p>,
      width: "20%",
    },
    {
      name: "Initial Amount",
      selector: (row) => row?.initial_cash,
      sortable: true,
      cell: (row) => <p>{row?.initial_cash}</p>,
      width: "15%",
    },
    {
      name: "Closing Amount",
      selector: (row) => row?.final_cash,
      sortable: true,
      cell: (row) => <p>{row?.final_cash}</p>,
      width: "15%",
    },
    {
      name: "Status",
      selector: (row) => row?.status,
      cell: (row) => <p>{row?.status}</p>,
      width: "10%",
    },
    {
      name: "Action",
      cell: (row) =>
        row?.status === "open" ? (
          <Button color="danger" onClick={() => openCloseModal(row)}>
            Close
          </Button>
        ) : (
          <p>Closed</p>
        ),
      width: "20%",
      center: true,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();
  const { registers } = useSelector((state) => state.app);

  const filteredItems = registers.filter((item) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const openCloseModal = (row) => {
    setSelectedRegister(row);
    setModalOpen(true);
  };

  const closeRegister = async () => {
    const payload = {
      register_id: selectedRegister.id,
      final_cash: closingCash,
      vendor_id: selectedRegister.vendor_id,
      biller_id: selectedRegister.biller_id,
    };

    try {
      const api_url = getAPIURL();
      const { data: resp } = await http.post(
        `${api_url}/close-register`,
        payload
      );
      toast.success("Register closed successfully.");
      setModalOpen(false);
      dispatch(updateRegister(resp));
      dispatch(setOpenRegister(null));
    } catch (e) {
      toast.error(e.message);
    }

    // Dispatch an action or make an API call to close the register
  };

  return (
    <div className="list-product list-category">
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
      {filteredItems.length > 0 ? (
        <DataTable
          className="custom-scrollbar"
          data={filteredItems}
          columns={categoryColumns}
          pagination
        />
      ) : (
        <p>No registers found.</p>
      )}

      {/* Modal for closing register */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
          Close Register
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="closingCash">Enter Closing Cash</Label>
            <Input
              type="number"
              id="closingCash"
              value={closingCash}
              onChange={(e) => setClosingCash(e.target.value)}
              placeholder="Enter final cash amount"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={closeRegister}>
            Confirm Close
          </Button>
          <Button color="danger" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
