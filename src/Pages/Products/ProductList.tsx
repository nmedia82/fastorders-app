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
  const { products } = useSelector((state: any) => state.products);

  const [filterText, setFilterText] = useState("");
  const filteredItems: ProductListType[] = productListTableData.filter(
    (item: ProductListType) => {
      return Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <div className="list-product product-list">
      <FilterComponent
        onFilter={(e: React.ChangeEvent<HTMLInputElement>) =>
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
