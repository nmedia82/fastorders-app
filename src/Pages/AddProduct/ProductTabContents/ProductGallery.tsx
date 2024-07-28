import React, { useState } from "react";
import { Form } from "reactstrap";
import { toast } from "react-toastify";
import Dropzone from "react-dropzone-uploader";
import { ActiveCallbackProp } from "../../../Types/ECommerce.type";
import { Btn, H6, P } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { productGalleryData } from "../../Common/Product";

export default function ProductGallery({ activeCallBack }: ActiveCallbackProp) {
  const [productImage, setProductImage] = useState({ productimage: "" });
  const { productimage } = productImage;

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleSubmitButton = () => {
    if (productimage) {
      toast.success("Successfully Completed");
    } else {
      toast.error("Please fill out details before moving on to the next step");
    }
  };

  return (
    <div className="sidebar-body">
      {productGalleryData.map((item) => (
        <div className="product-upload" key={item.id}>
          <P>{item.title}</P>
          <Form>
            <Dropzone
              multiple={true}
              getUploadParams={getUploadParams}
              inputContent={
                <div className="dz-message needsclick">
                  <SvgIcon iconId={item.icon} />
                  <H6>{"Drag files here"}</H6>
                  <span className="note needsclick">{item.spanText}</span>
                </div>
              }
            />
          </Form>
        </div>
      ))}
      <div className="product-buttons">
        <Btn color="transparent" className="me-1" onClick={() => activeCallBack(2)}>
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
