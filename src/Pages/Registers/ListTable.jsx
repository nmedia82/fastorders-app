import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../../Components/Applications/ECommerce/Common/FilterComponent";
import { useSelector } from "react-redux";
import { FormGroup, Input } from "reactstrap";
import { useDispatch } from "react-redux";

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
      width: "30%",
    },
    {
      name: "Initial Cash",
      selector: (row) => row?.initial_cash,
      sortable: true,
      cell: (row) => <p>{row?.initial_cash}</p>,
      width: "30%",
    },
    {
      name: "Total Ammount",
      selector: (row) => row?.final_cash,
      sortable: true,
      cell: (row) => <p>{row?.final_cash}</p>,
      width: "30%",
    },
    {
      name: "Status",
      selector: (row) => row?.status,
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
  const dispatch = useDispatch();
  const { registers } = useSelector((state) => state.app);
  // const { registers } = useSelector((state) => state.products);
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
