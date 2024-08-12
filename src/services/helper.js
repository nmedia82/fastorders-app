import data from "./config";
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
  const { api_url } = data;
  return api_url;
}

export function getVendorID() {
  const { vendor_id } = data;
  return vendor_id;
}

export function getVendorSettings(key) {
  const { settings } = data;
  return settings[key] || null;
}
