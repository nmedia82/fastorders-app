import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { Form, Button } from "reactstrap";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { H6 } from "../../AbstractElements";
import axios from "axios";
import { toast } from "react-toastify";
import { getAPIURLAWS, getVendorID } from "../../services/helper";
import Loader from "../../Layout/Loader";
import ProductImageCropper from "./ImageCropper/ImageCropperBody";

const api_url_aws = getAPIURLAWS();
const vendor_id = getVendorID();

const MultiImageUploaderWithCrop = ({ label, onUploaded }) => {
  const [imageSrc, setImageSrc] = useState(null); // For cropping and display
  const [isWorking, setIsWorking] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null); // To store the cropped image data
  const [filesToUpload, setFilesToUpload] = useState([]); // Keep track of multiple files

  // Handle file selection and pass to the cropper
  const handleSubmit = (files, allFiles) => {
    if (files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageSrc(reader.result); // Set the file to crop as soon as it's selected
      });
      setFilesToUpload(files); // Keep track of the selected files
      reader.readAsDataURL(files[0].file); // Read the image as data URL
      allFiles.forEach((f) => f.remove()); // Clear the file after selection
    }
  };

  // Handle the submission of the cropped image to the server
  const handleCroppedImageUpload = async () => {
    if (!croppedImage) return;
    console.log(croppedImage);
    setIsWorking(true);
    try {
      const formData = new FormData();

      // Loop through filesToUpload and append them as in your other application
      for (let file of filesToUpload) {
        formData.append("files[]", croppedImage); // Append the cropped image blob to files array
      }

      formData.append("vendor_id", vendor_id); // Append vendor_id for backend processing if needed

      // Send the image to the AWS endpoint
      const { data } = await axios.post(
        `${api_url_aws}/upload-images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type correctly
          },
        }
      );

      if (data.code === 200) {
        toast.success("Cropped image uploaded successfully!");
        onUploaded(data.uploadedImage); // Return the uploaded image to the parent component
        setImageSrc(null); // Reset the imageSrc state
        setCroppedImage(null); // Clear the cropped image after upload
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(`Cropped image upload failed: ${error.message}`);
    } finally {
      setIsWorking(false);
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
      )}

      {/* Image cropper view */}
      {imageSrc && (
        <div style={{ marginTop: "20px" }}>
          <H6>Crop your image</H6>
          <ProductImageCropper
            fileSrc={imageSrc}
            onCropped={(croppedBlob) => {
              setCroppedImage(croppedBlob); // Store the cropped image blob
            }}
          />
          <Button
            color="primary"
            onClick={handleCroppedImageUpload}
            disabled={!croppedImage}
          >
            Crop & Upload
          </Button>
        </div>
      )}
    </div>
  );
};

export default MultiImageUploaderWithCrop;
