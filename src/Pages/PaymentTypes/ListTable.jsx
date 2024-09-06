import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Components/Applications/ECommerce/Common/FilterComponent";
import { useSelector } from "react-redux";
import { FormGroup, Input } from "reactstrap";
import { Badges, Image, P } from "../../AbstractElements";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function ListTable({ setPaymentType }) {
  const Columns = [
    {
      name: "",
      cell: () => (
        <FormGroup check>
          <Input className="checkbox-primary" type="checkbox" />
        </FormGroup>
      ),
      sortable: false,
      width: "3%",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => <p>{row.name}</p>,
      width: "35%",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="product-action">
          <SvgIcon iconId="edit-content" onClick={() => setPaymentType(row)} />
          <SvgIcon iconId="trash1" onClick={() => handleDelete(row)} />
        </div>
      ),
      sortable: false,
    },
  ];
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState("");
  const { paymentTypes } = useSelector((state) => state.app);
  const filteredItems = paymentTypes.filter((item) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  const handleDelete = async (cat) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--theme-red)",
      cancelButtonColor: "var(--theme-blue)",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        // const resp = await dispatch(deletePaymentType(cat.term_id));
        // if (resp.payload.success) {
        //   toast.success("Payment Type Deleted");
        // }
      } catch (error) {
        console.log(error);
        toast.error("Error Deleting Payment Type");
      }
    }
  };
  return (
    <div className="list-product list-category">
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
      <DataTable
        className="custom-scrollbar"
        data={filteredItems}
        columns={Columns}
        pagination
      />
    </div>
  );
}
