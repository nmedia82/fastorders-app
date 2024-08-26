import React, { useEffect, useState } from "react";
import { Btn, H6, P } from "../../../../AbstractElements";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import MultiImageUploaderWithCrop from "../../../../Components/NM/ImageUploaderWithCrop";

export default function ProductGallery({
  activeCallBack,
  product,
  onSaveProduct,
}) {
  const [productImages, setProductImages] = useState([]);
  const [isSaving, setIsSaving] = useState(false); // To handle loading during save

  // Load existing product images when component mounts
  useEffect(() => {
    setProductImages(product.images || []);
  }, [product]);

  // Handle saving the product, including a loading state
  const handleSaveProduct = async () => {
    setIsSaving(true);
    try {
      await onSaveProduct(productImages); // Assuming onSaveProduct is async
    } catch (error) {
      console.error("Error saving product:", error);
    } finally {
      setIsSaving(false);
    }
  };

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
          onClick={() => activeCallBack(1)}
        >
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="back-arrow" /> {"Previous"}
          </div>
        </Btn>

        {/* Save Button with loading state and disabled check */}
        <Btn
          color="transparent"
          onClick={handleSaveProduct}
          disabled={isSaving || productImages.length === 0} // Disable if saving or no images
        >
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            {isSaving ? (
              <span className="spinner-border spinner-border-sm me-2" />
            ) : (
              <SvgIcon iconId="front-arrow" />
            )}
            {"Add Product"}
          </div>
        </Btn>
      </div>
    </div>
  );
}
