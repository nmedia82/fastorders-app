import React, { useRef } from "react";
import { getVendorSettings } from "../../services/helper";
import { QRCodeCanvas } from "qrcode.react";

const QRCodePage = () => {
  const vendor_slug = getVendorSettings("domain_slug");
  const qrcode_url = `https://${vendor_slug}.getorder.pk`;

  // Reference to the QR code canvas
  const qrRef = useRef(null);

  // Function to download QR code as an image
  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${vendor_slug}-qrcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Function to share the QR code link via WhatsApp
  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      "Check out this link: " + qrcode_url
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="page-body" style={styles.pageBody}>
      <h2>QR Code for {qrcode_url}</h2>
      <div ref={qrRef} style={styles.qrContainer}>
        <QRCodeCanvas value={qrcode_url} size={256} />
      </div>
      <button onClick={downloadQRCode} style={styles.downloadButton}>
        Download QR Code
      </button>
      <button onClick={shareViaWhatsApp} style={styles.whatsappButton}>
        Share via WhatsApp
      </button>
    </div>
  );
};

// Inline CSS for styling
const styles = {
  pageBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    textAlign: "center",
  },
  qrContainer: {
    margin: "20px 0",
  },
  downloadButton: {
    padding: "10px 20px",
    backgroundColor: "#ff7622",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px", // Add margin between buttons
  },
  whatsappButton: {
    padding: "10px 20px",
    backgroundColor: "#25d366", // WhatsApp's green color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default QRCodePage;
