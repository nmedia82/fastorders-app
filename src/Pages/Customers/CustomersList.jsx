import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Components/Applications/ECommerce/Common/FilterComponent";
import { useSelector } from "react-redux";
import { Container, FormGroup, Input } from "reactstrap";
import { Badges, Image, P } from "../../AbstractElements";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteCustomer } from "../../ReduxToolkit/Reducers/AppReducer";
import { Link } from "react-router-dom";

export default function CustomersList() {
  const categoryColumns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => <p>{row.id}</p>,
      width: "10%",
    },
    {
      name: "Name",
      selector: (row) => row.first_name,
      sortable: true,
      cell: (row) => <p>{`${row.first_name} ${row.last_name}`}</p>,
      width: "35%",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => <p>{row.email}</p>,
      width: "35%",
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      cell: (row) => <p>{row.address}</p>,
      width: "35%",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="product-action">
          <Link to={`/customers/${row.id}`}>
            <SvgIcon iconId="edit-content" />
          </Link>
          <SvgIcon iconId="trash1" onClick={() => handleDeleteCustomer(row)} />
        </div>
      ),
      sortable: false,
    },
  ];
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState("");
  const { vendorCustomers } = useSelector((state) => state.app);
  const filteredItems = vendorCustomers.filter((item) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const handleDeleteCustomer = async (customer) => {
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
        dispatch(deleteCustomer(customer.id));
        toast.success("Customer Deleted");
      } catch (error) {
        console.log(error);
        toast.error("Error Deleting Customer");
      }
    }
  };
  return (
    <div className="page-body main-project">
      <Container fluid>
        <div className="list-product list-category">
          <div className="d-flex justify-content-between">
            <FilterComponent
              onFilter={(e) => setFilterText(e.target.value)}
              filterText={filterText}
            />
            <Link
              role="button"
              className="btn btn-primary"
              to={"/customers/new"}
            >
              Add New
            </Link>
          </div>
          <DataTable
            className="custom-scrollbar"
            data={filteredItems}
            columns={categoryColumns}
            pagination
          />
        </div>
      </Container>
    </div>
  );
}
