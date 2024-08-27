import { getAPIURL } from "./helper";
import http from "./http";

const api_url = getAPIURL();
export function loginUser(user_info) {
  return new Promise((resolve, reject) => {
    const url = `${api_url}/login`;
    http
      .post(url, user_info)
      .then((response) => {
        const { data: user, success } = response.data;
        if (success) {
          login_user_locally(user);
          resolve(user);
        } else {
          reject(new Error("Email or password is invalid"));
        }
      })
      .catch((error) => {
        // console.error(error.response.data);
        reject(new Error(error.response.data));
      });
  });
}

export function login_user_locally(user_data) {
  localStorage.setItem("getorder_vendor", JSON.stringify(user_data));
  localStorage.setItem("getorder_orders_ts", user_data.server_ts);
}

export function logout() {
  localStorage.removeItem("getorder_vendor");
  localStorage.removeItem("getorder_orders_ts");
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem("getorder_vendor");
    if (!user) return null;
    return JSON.parse(user);
  } catch (ex) {
    return null;
  }
}

export async function getVendorID() {
  try {
    const user = await getCurrentUser();
    if (!user) return null;
    // return user.user.ID;
    return 30;
  } catch (ex) {
    return null;
  }
}
