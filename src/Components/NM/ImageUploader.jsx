import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { Form } from "reactstrap";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { H6, Image } from "../../AbstractElements";
import axios from "axios";
import { toast } from "react-toastify";
import { getAPIURL } from "../../services/helper";
import Loader from "../../Layout/Loader";

const api_url = getAPIURL();

const MultiImageUploader = ({
  label,
  existingImages,
  onUploaded,
  multiple,
}) => {
  const [images, setImages] = useState([]);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    setImages(existingImages || []);
  }, [existingImages]);

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onUploaded(updatedImages);
  };

  const handleSubmit = async (files, allFiles) => {
    setIsWorking(true);

    try {
      const formData = new FormData();
      files.forEach(({ file }) => {
        formData.append("files[]", file);
      });

      const { data } = await axios.post(
        `${api_url}/utils/upload-images`,
        formData
      );

      if (data.code === 200) {
        const updatedImages = [...images, ...data.uploadedImages];
        setImages(updatedImages);
        onUploaded(updatedImages);
        toast.success("Files uploaded successfully!");
        allFiles.forEach((f) => f.remove());
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("File upload failed");
    } finally {
      setIsWorking(false);
    }
  };

  return (
    <div>
      {isWorking && <Loader />}
      <div
        className="product-upload"
        style={{ border: "1px dashed #ccc", padding: "20px" }}
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <Dropzone
            multiple={multiple}
            onSubmit={handleSubmit}
            inputContent={
              <div className="dz-message needsclick">
                <SvgIcon iconId="file-upload" />
                <H6>{label}</H6>
              </div>
            }
          />
        </Form>
      </div>
      <div
        className="image-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {images.length > 0 &&
          images.map((image, index) => (
            <div
              key={index}
              className="image-item"
              style={{ position: "relative", width: "150px" }}
            >
              <Image src={image} width={150} />
              <i
                className="icon icon-trash cursor-pointer txt-theme-red"
                onClick={() => handleDeleteImage(index)}
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></i>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultiImageUploader;
