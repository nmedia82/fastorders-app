import React, { useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Common/FilterComponent";
import { ProductListType } from "../../Types/ECommerce.type";
import {
  productListColumns,
  productListTableData,
} from "../../Data/Applications/ECommerce/ProductList";
import { useSelector } from "react-redux";

export default function ProductListTable() {
  const { products } = useSelector((state) => state.products);

  const [filterText, setFilterText] = useState("");
  const filteredItems= products.filter(
    (item) => {
      return Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  console.log(products)
  return (
    <div className="list-product product-list">
      <FilterComponent
        onFilter={(e) =>
          setFilterText(e.target.value)
        }
        filterText={filterText}
      />
      <DataTable
        className="custom-scrollbar"
        data={filteredItems}
        columns={productListColumns}
        pagination
      />
    </div>
  );
}
