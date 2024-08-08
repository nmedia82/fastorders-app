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

export function getAPIURL() {
  const { api_url } = data;
  return api_url;
}
