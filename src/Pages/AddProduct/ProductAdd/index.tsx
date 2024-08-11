import React, { useState } from "react";
import { ProductTabContentProp } from "../../../Types/ECommerce.type";
import { Col, TabContent, TabPane } from "reactstrap";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";
import AdvanceSection from "../AdvanceSection";

export default function ProductAdd({ steps, activeCallBack }: ProductTabContentProp) {
  const [product, setProduct] = useState({});

  const handleFormChange = (key: any, value: any) => {
    setProduct((prevProduct) => ({ ...prevProduct, [key]: value }));
  };
  return (
    <Col xxl={9} xl={8} className="box-col-8 position-relative">
      <TabContent activeTab={steps}>
        <TabPane tabId={1}>
          <AddProductDetails
            activeCallBack={activeCallBack}
            onFormChange={handleFormChange}
            product={product}
          />
        </TabPane>
        <TabPane tabId={2}>
          <AdvanceSection activeCallBack={activeCallBack} />
        </TabPane>
        <TabPane tabId={3}>
          <ProductGallery activeCallBack={activeCallBack} product={product} />
        </TabPane>
      </TabContent>
    </Col>
  );
}
