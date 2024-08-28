import { dynamicImage } from "../Utils";
import { getCurrentUser } from "./auth";
import data from "./config";

const VendorData = getCurrentUser();

export async function filterNonBrokenImages(imageUrls) {
  const checkImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url);
      img.onerror = () => reject(url);
    });
  };

  const results = await Promise.allSettled(imageUrls.map(checkImage));

  const validUrls = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  return validUrls;
}

export function getProductMainImage(product) {
  // Check if the product has images and the first image exists
  if (product.images && product.images.length > 0) {
    return product.images[0];
  }

  // Return the default image if no images are available
  return dynamicImage("user.png");
}

export function getFormattedPrice(p) {
  p = `Rs.${parseFloat(p).toFixed(2)}`;
  return p;
}

export function getFormattedDate(date) {
  const options = { month: "short", day: "numeric", year: "2-digit" };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate;
}

export function getAPIURL() {
  const api_url = process.env.REACT_APP_API_URL;
  return api_url;
}

export function getAPIURLAWS() {
  const api_url_aws = process.env.REACT_APP_API_URL_AWS;
  return api_url_aws;
}

export function getUserID() {
  try {
    const user = getCurrentUser();
    if (!user) return null;
    return user.user.ID;
  } catch (ex) {
    return null;
  }
}

export function getVendorID() {
  if (!VendorData || !VendorData.vendor_settings) return null;

  const { vendor_id } = VendorData.vendor_settings;
  return vendor_id;
}

export function getOpenRegisterID() {
  const { vendor_id } = VendorData && VendorData.vendor_settings;
  // return 30;
  return vendor_id;
}

export function getVendorSettings(key, default_val = null) {
  const { settings } = data;
  return settings[key] || default_val;
}
