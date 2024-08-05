import SignIn from "../Pages/Auth/SignIn";
import Register from "../Pages/Auth/Register";
export const authRoutes = [
  //authentication
  { path: `${process.env.PUBLIC_URL}/login`, element: <SignIn /> },

  { path: `${process.env.PUBLIC_URL}/sign_up`, element: <Register /> },
];
