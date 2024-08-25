import React, { useEffect, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";
import { toast } from "react-toastify";
import { getVendorID } from "../../../../services/auth";
import {
  addProduct,
  updateProduct,
} from "../../../../ReduxToolkit/Reducers/ProductsReducer";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductAdd({ steps, activeCallBack }) {
  const { products } = useSelector((state) => state.products);
  const [product, setProduct] = useState({
    vendor_id: "",
    name: "",
    price: "",
    description: "",
    discount_price: "",
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
      setProduct({ ...found });
    }
  }, [product_id]);
  const dispatch = useDispatch();
  const handleFormChange = (key, value) => {
    setProduct((prevProduct) => ({ ...prevProduct, [key]: value }));
  };

  const handleSaveProduct = async (productImages) => {
    const vendor_id = await getVendorID();
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
          <AddProductDetails
            activeCallBack={activeCallBack}
            onFormChange={handleFormChange}
            product={product}
          />
        </TabPane>
        <TabPane tabId={2}>
          <ProductGallery
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
