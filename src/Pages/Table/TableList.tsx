import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Common/FilterComponent";
import { TableColumns } from "./TableData";
import { TableTableTypes } from "../../Types/ECommerce.type"; // Assuming you have the correct type here
import { useSelector } from "react-redux";

export default function TableList() {
  // Pull vendorTables from Redux state
  const { vendorTables } = useSelector((state: any) => state.app);

  // Set up state for filtering text
  const [filterText, setFilterText] = useState("");

  // Filter the table data based on the filterText input
  const filteredItems: TableTableTypes[] = vendorTables.filter(
    (item: TableTableTypes) => {
      return Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );

  return (
    <div className="list-product list-category">
      <FilterComponent
        onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
        filterText={filterText}
      />
      <DataTable
        className="custom-scrollbar"
        data={filteredItems}
        columns={TableColumns}
        pagination
      />
    </div>
  );
}
