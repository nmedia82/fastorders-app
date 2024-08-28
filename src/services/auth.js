import http from "./http";
const api_url = process.env.REACT_APP_API_URL;

export function loginUser(user_info) {
  const user = getCurrentUser();
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

export function set_pos_register(register_id) {
  localStorage.setItem("getorder_pos_register_id", register_id);
}

export function getPOSRegisterID() {
  try {
    const register = localStorage.getItem("getorder_pos_register_id");
    if (!register) return null;
    return register;
  } catch (ex) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("getorder_vendor");
  localStorage.removeItem("getorder_orders_ts");
  localStorage.removeItem("getorder_pos_register_id");
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
