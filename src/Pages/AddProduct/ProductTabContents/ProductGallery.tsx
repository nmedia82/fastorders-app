import React, { useEffect, useState } from "react";
import { Btn, H6, P } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import MultiImageUploader from "../../../Components/NM/ImageUploader";
import { ActiveCallbackProp } from "../../../Types/ECommerce.type";

export default function ProductGallery({
  activeCallBack,
  product,
}: {
  activeCallBack: any;
  product: any;
}) {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    setProductImages(product.images || []);
  }, [product]);

  const handleSubmitButton = () => {
    console.log(product);
  };

  return (
    <div className="sidebar-body">
      <MultiImageUploader
        multiple={true}
        label={"Upload Images"}
        existingImages={productImages}
        onUploaded={(images: any) => setProductImages(images)}
      />

      <div className="product-buttons">
        <Btn
          color="transparent"
          className="me-1"
          onClick={() => activeCallBack(2)}
        >
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="back-arrow" /> {"Previous"}
          </div>
        </Btn>
        <Btn color="transparent" onClick={handleSubmitButton}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="front-arrow" /> {"Add Product"}
          </div>
        </Btn>
      </div>
    </div>
  );
}
