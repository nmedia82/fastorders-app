import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { Form, Button } from "reactstrap";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { H6, Image } from "../../AbstractElements";
import axios from "axios";
import { toast } from "react-toastify";
import { getAPIURLAWS, getVendorID } from "../../services/helper";
import Loader from "../../Layout/Loader";
import ProductImageCropper from "./ImageCropper/ImageCropperBody";

const api_url_aws = getAPIURLAWS();
const vendor_id = getVendorID();

const MultiImageUploaderWithCrop = ({ label, onUploaded, existingImages }) => {
  const [imageSrc, setImageSrc] = useState(null); // For cropping and display
  const [isWorking, setIsWorking] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null); // To store a single cropped image
  const [filesToUpload, setFilesToUpload] = useState([]); // Keep track of selected files
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(existingImages || []);
  }, [existingImages]);

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onUploaded(updatedImages);
  };

  // Handle the file change status directly from Dropzone
  const handleChangeStatus = (fileWithMeta, status) => {
    if (status === "done") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageSrc(reader.result); // Set the file to crop as soon as it's selected
      });
      setFilesToUpload([fileWithMeta.file]); // Store the selected file for later upload
      reader.readAsDataURL(fileWithMeta.file); // Read the image as a data URL for preview
    }
  };

  // Handle the submission of the cropped image to the server
  const handleCroppedImageUpload = async () => {
    if (!croppedImage) return;

    setIsWorking(true);

    try {
      const formData = new FormData();
      formData.append("files[]", croppedImage); // Append the cropped image to the form
      formData.append("vendor_id", vendor_id); // Append vendor_id for backend processing

      // Send the image to the AWS endpoint
      const { data } = await axios.post(
        `${api_url_aws}/upload-images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.code === 200) {
        toast.success("Cropped image uploaded successfully!");
        onUploaded(data.uploadedImages); // Return the uploaded image to the parent component
        resetCropper(); // Reset cropper state after upload
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(`Image upload failed: ${error.message}`);
    } finally {
      setIsWorking(false);
    }
  };

  // Reset cropper state
  const resetCropper = () => {
    setImageSrc(null);
    setCroppedImage(null);
  };

  // Handle when cropping is done
  const handleCropComplete = (croppedBlob) => {
    if (croppedBlob) {
      setCroppedImage(croppedBlob); // Replace the existing cropped image with the new one
    }
  };

  return (
    <div>
      {isWorking && <Loader />}

      {/* Hide Dropzone if imageSrc is set (i.e., an image is being cropped) */}
      {!imageSrc && (
        <div
          className="product-upload"
          style={{ border: "1px dashed #ccc", padding: "20px" }}
        >
          <Form onSubmit={(e) => e.preventDefault()}>
            <Dropzone
              multiple={false} // Only allow one image at a time for cropping
              onChangeStatus={handleChangeStatus} // Use onChangeStatus to handle image selection
              inputContent={
                <div className="dz-message needsclick">
                  <SvgIcon iconId="file-upload" />
                  <H6>{label}</H6>
                </div>
              }
            />
          </Form>
        </div>
      )}

      {/* Image cropper view */}
      {imageSrc && (
        <div style={{ marginTop: "20px" }}>
          <H6>Crop your image</H6>
          <ProductImageCropper
            fileSrc={imageSrc}
            onCropped={handleCropComplete} // Store the cropped image blob
          />
          <Button
            color="primary"
            onClick={handleCroppedImageUpload}
            disabled={!croppedImage} // Disable if no image is cropped
          >
            Upload Cropped Image
          </Button>
          <Button
            color="secondary"
            onClick={resetCropper}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </Button>
        </div>
      )}
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

export default MultiImageUploaderWithCrop;
