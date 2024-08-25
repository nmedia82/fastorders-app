import React, { useEffect, useState } from "react";
import { Btn, H6, P } from "../../../../AbstractElements";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import MultiImageUploader from "../../../../Components/NM/ImageUploader";
import MultiImageUploaderWithCrop from "../../../../Components/NM/ImageUploaderWithCrop";

export default function ProductGallery({
  activeCallBack,
  product,
  onSaveProduct,
  onFormChange,
}) {
  const [productImages, setProductImages] = useState([]);
  console.log(productImages);
  useEffect(() => {
    setProductImages(product.images || []);
  }, [product]);

  return (
    <div className="sidebar-body">
      <MultiImageUploaderWithCrop
        multiple={true}
        label={"Upload Images"}
        existingImages={productImages}
        onUploaded={(images) => setProductImages(images)}
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
        <Btn color="transparent" onClick={onSaveProduct}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="front-arrow" /> {"Add Product"}
          </div>
        </Btn>
      </div>
    </div>
  );
}
