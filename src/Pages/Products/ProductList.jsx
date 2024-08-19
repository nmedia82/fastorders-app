import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Common/FilterComponent";
import { ProductListType } from "../../Types/ECommerce.type";
import { productListColumns } from "../../Data/Applications/ECommerce/ProductList";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
} from "../../ReduxToolkit/Reducers/ProductsReducer"; // Correct reducer for products

export default function ProductListTable() {
  const { products, categories } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts()); // Corrected: Call the thunk properly
    }
    if (categories.length === 0) {
      dispatch(fetchCategories()); // Corrected: Call the thunk properly
    }
  }, [products, categories, dispatch]);

  const [filterText, setFilterText] = useState("");
  const filteredItems = products.filter((item) => {
    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div className="list-product product-list">
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
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
