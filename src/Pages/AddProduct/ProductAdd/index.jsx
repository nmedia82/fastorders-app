import React, { useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";
import { toast } from "react-toastify";
import { getVendorID } from "../../../services/auth";
import { addProduct } from "../../../ReduxToolkit/Reducers/ProductsReducer";
import { useDispatch } from "react-redux";

export default function ProductAdd({ steps, activeCallBack }) {
  const [product, setProduct] = useState({
    manage_stock: true,
    images: [],
    categories: [],
  });
  const dispatch = useDispatch();
  const handleFormChange = (key, value) => {
    setProduct((prevProduct) => ({ ...prevProduct, [key]: value }));
  };
  const handleSaveProduct = async () => {
    const vendor_id = await getVendorID();
    const randomID = Math.random().toString(36).substring(2, 10);
    try {
      const productData = {
        ...product,
        vendor_id,
        sku: product.sku || randomID,
      };
      console.log(productData);
      // Dispatch the addProduct action
      await dispatch(addProduct(productData)).unwrap();
      toast.success("Product added successfully");
    } catch (e) {
      toast.error(`Failed to add product: ${e.message}`);
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
        {/* <TabPane tabId={2}>
          <ProductPricing 
            activeCallBack={activeCallBack}
            onFormChange={handleFormChange}
            product={product}
          
          />
        </TabPane> */}
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
