import React, { useRef, useState, useEffect } from "react";
import ReactCrop, {
  Crop,
  PixelCrop,
  centerCrop,
  makeAspectCrop,
} from "react-image-crop";
import { useDebounceEffect } from "./UseDebounceEffect";
import { canvasPreview } from "./CanvasPreview";

interface ProductImageCropperProps {
  fileSrc: string; // The external file source passed via props
  onCropped: (croppedBlob: Blob | null) => void; // Callback to return the cropped image
}

export default function ProductImageCropper({
  fileSrc,
  onCropped,
}: ProductImageCropperProps) {
  const [imageSrc, setImageSrc] = useState<string>(fileSrc || ""); // Initialize with fileSrc prop
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [aspect] = useState<number | undefined>(16 / 9); // Rectangular aspect ratio

  useEffect(() => {
    // When fileSrc prop changes, update the imageSrc state
    if (fileSrc) {
      setImageSrc(fileSrc);
      setCrop(undefined); // Reset the crop when a new image is loaded
    }
  }, [fileSrc]);

  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) {
    return centerCrop(
      makeAspectCrop({ unit: "%", width: 50 }, aspect, mediaWidth, mediaHeight),
      mediaWidth,
      mediaHeight
    );
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  // Convert canvas to Blob (cropped image)
  const getCroppedImage = () => {
    if (previewCanvasRef.current) {
      previewCanvasRef.current.toBlob((blob) => {
        onCropped(blob); // Pass cropped image Blob to parent via callback
      });
    }
  };

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imageRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imageRef.current,
          previewCanvasRef.current,
          completedCrop
        );
        getCroppedImage(); // Automatically trigger the cropping process
      }
    },
    100,
    [completedCrop]
  );

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Real Image for cropping */}
      {!!imageSrc && (
        <div style={{ flex: "1" }}>
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
          >
            <img
              ref={imageRef}
              alt="Crop me"
              src={imageSrc}
              onLoad={onImageLoad}
              className="crop-image"
              style={{ maxWidth: "100%" }}
            />
          </ReactCrop>
        </div>
      )}

      {/* Cropped Preview */}
      {!!completedCrop && (
        <div style={{ flex: "1", textAlign: "center" }}>
          <canvas
            ref={previewCanvasRef}
            className="preview-canvas"
            style={{
              width: completedCrop.width,
              height: completedCrop.height,
            }}
          />
        </div>
      )}
    </div>
  );
}
