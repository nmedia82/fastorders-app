import axios from "axios";

// New axio interceptor syntax from
// source: https://stackoverflow.com/questions/68714143/how-can-i-use-axios-interceptors-to-add-some-headers-to-responses
axios.interceptors.request.use(
  (config) => {
    // console.log(config.url);

    if (
      config.url !==
      "https://lpvby5y4xzvky4ysubzobfuthi0jxpyh.lambda-url.us-east-1.on.aws/api/uploadImages"
    )
      config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
