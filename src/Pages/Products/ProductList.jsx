import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../Common/FilterComponent";
import { ProductListType } from "../../Types/ECommerce.type";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  fetchCategories,
  fetchProducts,
} from "../../ReduxToolkit/Reducers/ProductsReducer"; // Correct reducer for products
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FormGroup, Input } from "reactstrap";
import { Image, P } from "../../AbstractElements";
import { Link } from "react-router-dom";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

export default function ProductListTable() {
  const productListColumns = [
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
      name: "Product Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => (
        <div className="product-names">
          <div className="light-product-box">
            <Image className="img-fluid" src={row.images[0]} alt="" />
          </div>
          <P>{row.name}</P>
        </div>
      ),
      width: "20%",
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      sortable: true,
      cell: (row) => <P className="f-light">{row.stock}</P>,
    },
    {
      name: "Regular Price",
      selector: (row) => row.regular_price,
      sortable: true,
      cell: (row) => <P className="f-light">{row.regular_price}</P>,
    },
    {
      name: "Sale Price",
      selector: (row) => row.sale_price,
      sortable: true,
      cell: (row) => <P className="f-light">{row.sale_price}</P>,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="product-action">
          <Link
            to={`${process.env.PUBLIC_URL}/applications/ecommerce/add_products`}
          >
            <SvgIcon iconId="edit-content" />
          </Link>
          <SvgIcon iconId="trash1" onClick={() => handleDelete(row.id)} />
        </div>
      ),
      sortable: true,
    },
  ];

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
  const handleDelete = async (id) => {
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
        dispatch(deleteProduct(id));
        toast.success("Product deleted successfully");
      } catch (error) {
        toast.error("error deletnig product");
        console.log(error);
      }
    }
  };
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
