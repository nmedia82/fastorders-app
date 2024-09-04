import React, { useEffect, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import { toast } from "react-toastify";
import {
  addProduct,
  updateProduct,
} from "../../../../ReduxToolkit/Reducers/ProductsReducer";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getVendorID } from "../../../../services/helper";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeGallery from "./EmployeeGallery";

export default function EmployeeAdd({ steps, activeCallBack }) {
  const { products } = useSelector((state) => state.products);
  const [product, setProduct] = useState({
    vendor_id: "",
    name: "",
    regular_price: "",
    description: "",
    sale_price: "",
    categories: [],
    sku: "",
    manage_stock: true,
    stock_quantity: "",
    product_cost: "",
    images: [],
  });
  const navigate = useNavigate();

  const { product_id } = useParams();
  useEffect(() => {
    if (product_id) {
      const found = products.find(
        (product) => String(product.id) === String(product_id)
      );

      if (!found) navigate("/products"); // if refreshed while editing

      setProduct({ ...found });
    }
  }, [product_id]);
  const dispatch = useDispatch();
  const handleFormChange = (key, value) => {
    setProduct((prevProduct) => ({ ...prevProduct, [key]: value }));
  };

  const handleSaveProduct = async (productImages) => {
    const vendor_id = getVendorID();
    const randomID = Math.random().toString(36).substring(2, 10);
    const formatedCategories = product.categories.map((cat) => cat.id);
    // console.log(formatedCategories);
    try {
      if (product_id) {
        const productData = {
          ...product,
          images: [...productImages],
          categories: formatedCategories,
          sku: "",
        };
        // Dispatch the updateProduct action
        const resp = await dispatch(updateProduct(productData));
        if (resp.payload.success) {
          toast.success("Product Updated successfully");
          navigate(`${process.env.PUBLIC_URL}/products`);
        }
      } else {
        const productData = {
          ...product,
          vendor_id,
          sku: product.sku || randomID,
          categories: formatedCategories,
        };
        // Dispatch the addProduct action
        await dispatch(addProduct(productData)).unwrap();
        toast.success("Product added successfully");
      }
    } catch (e) {
      toast.error(`Failed to save product: ${e.message}`);
      console.error(e);
    }
  };
  return (
    <Col xxl={9} xl={8} className="box-col-8 position-relative">
      <TabContent activeTab={steps} className="p-b-50">
        <TabPane tabId={1}>
          <EmployeeDetails
            activeCallBack={activeCallBack}
            onFormChange={handleFormChange}
            product={product}
          />
        </TabPane>
        <TabPane tabId={2}>
          <EmployeeGallery
            activeCallBack={activeCallBack}
            onFormChange={handleFormChange}
            product={product}
            onSaveProduct={handleSaveProduct}
          />
        </TabPane>
      </TabContent>
    </Col>
  );
}
