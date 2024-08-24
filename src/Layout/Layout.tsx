/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setSideBarToggle } from "../ReduxToolkit/Reducers/Layout/LayoutReducer";
import { addSidebarTypes } from "../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer";
import { AppDispatch, RootState } from "../ReduxToolkit/Store";
import FooterLayout from "./Footer/Footer";
import Header from "./Header";
import Loader from "./Loader";
import Sidebar from "./Sidebar";
import Taptop from "./Taptop";
import ThemeCustomizer from "./ThemeCustomizer";
import {
  fetchCategories,
  fetchProducts,
} from "../ReduxToolkit/Reducers/ProductsReducer";
import {
  fetchOrders,
  syncNewOrders,
} from "../ReduxToolkit/Reducers/OrdersReducer";
import axios from "axios";
import { getAPIURL, getVendorSettings } from "../services/helper";
const vendor_id = getVendorSettings("vendor_id");

export default function Layout() {
  const { sidebar_types } = useSelector(
    (state: RootState) => state.themeCustomizer
  );
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch<AppDispatch>();
  const api_url = getAPIURL();

  const updateSidebarBasedOnWidth = () => {
    const windowWidth = window.innerWidth;
    if (sidebar_types === "compact-wrapper") {
      if (windowWidth <= 1200) {
        dispatch(setSideBarToggle(true));
      } else {
        dispatch(setSideBarToggle(false));
      }
    } else if (sidebar_types === "horizontal-wrapper") {
      if (windowWidth <= 992) {
        dispatch(setSideBarToggle(true));
        dispatch(addSidebarTypes("compact-wrapper"));
      } else {
        dispatch(setSideBarToggle(false));
        dispatch(addSidebarTypes("horizontal-wrapper"));
      }
    }
  };
  useEffect(() => {
    updateSidebarBasedOnWidth();
    window.addEventListener("resize", () => {
      updateSidebarBasedOnWidth();
    });
  }, [sidebar_types]);

  // Checking unread notifications every 30 seconds
  useEffect(() => {
    const checkUnreadNotifications = async () => {
      const ts = localStorage.getItem("getorder_orders_ts");
      console.log("checking ts");
      if (ts) {
        const { data: orders } = await axios.get(
          `${api_url}/get-orders?vendor_id=${vendor_id}&ts=${ts}`
        );
        dispatch(syncNewOrders(orders.data));
      }
    };

    const notificationInterval = setInterval(checkUnreadNotifications, 50000); // Check every 30 seconds

    return () => clearInterval(notificationInterval);
  }, [dispatch]);

  useEffect(() => {
    // disptching products/categories/orders
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <Loader />
      <Taptop />
      <div
        className={`page-wrapper ${
          sideBarToggle ? "compact-wrapper" : sidebar_types
        }`}
        id="pageWrapper"
      >
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <Outlet />
          <FooterLayout />
        </div>
      </div>
      {/* <ThemeCustomizer /> */}
    </>
  );
}
