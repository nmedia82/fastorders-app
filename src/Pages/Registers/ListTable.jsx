import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Components/Applications/ECommerce/Common/FilterComponent";
import { useSelector } from "react-redux";
import { FormGroup, Input } from "reactstrap";
import { Badges, Image, P } from "../../AbstractElements";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../ReduxToolkit/Reducers/ProductsReducer";
import Swal from "sweetalert2";

export default function ListTable() {
  const categoryColumns = [
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
      name: "Title",
      selector: (row) => row?.title,
      sortable: true,
      cell: (row) => <p>{row?.title}</p>,
      width: "35%",
    },
    {
      name: "Initial Cash",
      selector: (row) => row?.initial_cash,
      sortable: true,
      cell: (row) => <p>{row?.initial_cash}</p>,
    },
    {
      name: "Total Ammount",
      selector: (row) => row?.final_cash,
      sortable: true,
      cell: (row) => <p>{row?.final_cash}</p>,
    },
    {
      name: "Status",
      selector: (row) => row?.status,
      sortable: true,
      cell: (row) => <p>{row?.status}</p>,
    },

    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <div className="product-action">
    //       <SvgIcon iconId="edit-content" onClick={() => setCategory(row)} />
    //       <SvgIcon iconId="trash1" onClick={() => handleDeleteCategory(row)} />
    //     </div>
    //   ),
    //   sortable: false,
    // },
  ];
  const [filterText, setFilterText] = useState("");
  // const { registers } = useSelector((state) => state.products);
  const registers = [];
  const filteredItems = registers.filter((item) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div className="list-product list-category">
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
      <DataTable
        className="custom-scrollbar"
        data={filteredItems}
        columns={categoryColumns}
        pagination
      />
    </div>
  );
}
