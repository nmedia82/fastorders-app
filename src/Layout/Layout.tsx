/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from "react";
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
import { fetchDashboardReports } from "../ReduxToolkit/Reducers/AppReducer";

const vendor_id = getVendorSettings("vendor_id");

export default function Layout() {
  const { sidebar_types } = useSelector(
    (state: RootState) => state.themeCustomizer
  );
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch<AppDispatch>();
  const api_url = getAPIURL();

  const updateSidebarBasedOnWidth = useCallback(() => {
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
  }, [sidebar_types, dispatch]);

  useEffect(() => {
    updateSidebarBasedOnWidth();
    const handleResize = () => {
      updateSidebarBasedOnWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateSidebarBasedOnWidth]);

  // Checking unread notifications every 30 seconds
  // useEffect(() => {
  //   const checkNewOrderNotifications = async () => {
  //     try {
  //       const ts = localStorage.getItem("getorder_orders_ts");
  //       // console.log("checking ts");
  //       if (ts) {
  //         const { data: orders } = await axios.get(
  //           `${api_url}/get-orders?vendor_id=${vendor_id}&ts=${ts}`
  //         );
  //         dispatch(syncNewOrders(orders.data));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching unread notifications", error);
  //     }
  //   };

  //   const notificationInterval = setInterval(checkNewOrderNotifications, 15000); // Check every 30 seconds (30000 ms)

  //   return () => clearInterval(notificationInterval);
  // }, [dispatch, api_url]);

  useEffect(() => {
    // Dispatching products/categories/orders
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
