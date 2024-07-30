import ErrorPage1 from "../Components/Pages/Others/ErrorPage/ErrorPage1";
import ErrorPage2 from "../Components/Pages/Others/ErrorPage/ErrorPage2";
import ErrorPage3 from "../Components/Pages/Others/ErrorPage/ErrorPage3";
import ErrorPage4 from "../Components/Pages/Others/ErrorPage/ErrorPage4";
import ForgetPassword from "../Components/Pages/Others/Authentication/ForgetPassword";
import LoginSimple from "../Components/Pages/Others/Authentication/LoginSimple";
import LoginSweetAlert from "../Components/Pages/Others/Authentication/LoginSweetAlert";
import LoginWithTooltip from "../Components/Pages/Others/Authentication/LoginWithTooltip";
import LoginWithValidation from "../Components/Pages/Others/Authentication/LoginWithValidation";
import Maintenance from "../Components/Pages/Others/Authentication/Maintenance";
import RegisterSimple from "../Components/Pages/Others/Authentication/RegisterSimple";
import RegisterWithBgImage from "../Components/Pages/Others/Authentication/RegisterWithBgImage";
import RegisterWithImageTwo from "../Components/Pages/Others/Authentication/RegisterWithImageTwo";
import RegisterWizard from "../Components/Pages/Others/Authentication/RegisterWizard";
import ResetPassword from "../Components/Pages/Others/Authentication/ResetPassword";
import UnlockUser from "../Components/Pages/Others/Authentication/UnlockUser";
import VisualLogin from "../Components/Pages/Others/Authentication/VisualLogin";
import VisualLogin2 from "../Components/Pages/Others/Authentication/VisualLogin2";
import ComingWithBgImage from "../Components/Pages/Others/ComingSoon/ComingWithBgImage";
import ComingWithBgVideo from "../Components/Pages/Others/ComingSoon/ComingWithBgVideo";
import SimpleComingSoon from "../Components/Pages/Others/ComingSoon/SimpleComingSoon";
import ErrorPage5 from "../Components/Pages/Others/ErrorPage/ErrorPage5";
import ErrorPage6 from "../Components/Pages/Others/ErrorPage/ErrorPage6";
import SignIn from "../Pages/Auth/SignIn";
import Register from "../Pages/Auth/Register";
export const authRoutes = [
  // Error Pages
  { path: `${process.env.PUBLIC_URL}/others/error_page_400`, element: <ErrorPage1 /> },
  { path: `${process.env.PUBLIC_URL}/others/error_page_401`, element: <ErrorPage2 /> },
  { path: `${process.env.PUBLIC_URL}/others/error_page_403`, element: <ErrorPage3 /> },
  { path: `${process.env.PUBLIC_URL}/others/error_page_404`, element: <ErrorPage4 /> },
  { path: `${process.env.PUBLIC_URL}/others/error_page_500`, element: <ErrorPage5 /> },
  { path: `${process.env.PUBLIC_URL}/others/error_page_503`, element: <ErrorPage6 /> },
  //coming soon pages
  { path: `${process.env.PUBLIC_URL}/coming_soon/coming_simple`, element: <SimpleComingSoon /> },
  { path: `${process.env.PUBLIC_URL}/coming_soon/coming_bg_video`, element: <ComingWithBgVideo /> },
  { path: `${process.env.PUBLIC_URL}/coming_soon/coming_bg_img`, element: <ComingWithBgImage /> },
  //authentication
  //   { path: `${process.env.PUBLIC_URL}/login`, element: <SignIn /> },
  { path: `${process.env.PUBLIC_URL}/auth/login`, element: <LoginSimple /> },
  { path: `${process.env.PUBLIC_URL}/auth/login_bg_img`, element: <VisualLogin /> },
  { path: `${process.env.PUBLIC_URL}/auth/login_bg_img2`, element: <VisualLogin2 /> },
  { path: `${process.env.PUBLIC_URL}/auth/login_bs_validation`, element: <LoginWithValidation /> },
  { path: `${process.env.PUBLIC_URL}/auth/login_bs_tooltip`, element: <LoginWithTooltip /> },
  { path: `${process.env.PUBLIC_URL}/auth/login_sa_validation`, element: <LoginSweetAlert /> },
  { path: `${process.env.PUBLIC_URL}/auth/sign_up`, element: <RegisterSimple /> },
  { path: `${process.env.PUBLIC_URL}/sign_up`, element: <Register /> },

  { path: `${process.env.PUBLIC_URL}/auth/sign_up_one`, element: <RegisterWithBgImage /> },
  { path: `${process.env.PUBLIC_URL}/auth/sign_up_two`, element: <RegisterWithImageTwo /> },
  { path: `${process.env.PUBLIC_URL}/auth/unlock`, element: <UnlockUser /> },
  { path: `${process.env.PUBLIC_URL}/auth/forget_password`, element: <ForgetPassword /> },
  { path: `${process.env.PUBLIC_URL}/auth/reset_password`, element: <ResetPassword /> },
  { path: `${process.env.PUBLIC_URL}/auth/maintenance`, element: <Maintenance /> },
  { path: `${process.env.PUBLIC_URL}/auth/sign_up_wizard`, element: <RegisterWizard /> },
];
