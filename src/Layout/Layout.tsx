import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'
import Taptop from './Taptop'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import FooterLayout from './Footer/Footer'
import Header from './Header'
import ThemeCustomizer from './ThemeCustomizer'
import { RootState } from '../ReduxToolkit/Store'
import { setSideBarToggle } from '../ReduxToolkit/Reducers/Layout/LayoutReducer'
import { addSidebarTypes } from '../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer'

export default function Layout() {
  const { sidebar_types } = useSelector((state: RootState) => state.themeCustomizer);
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  const updateSidebarBasedOnWidth = () => {
    const windowWidth = window.innerWidth;
    if (sidebar_types === "compact-wrapper") {
      if (windowWidth <= 1200) {
        dispatch(setSideBarToggle(true));
      } else {
        dispatch(setSideBarToggle(false));
      }
    }
    else if (sidebar_types === "horizontal-wrapper") {
      if (windowWidth <= 992) {
        dispatch(setSideBarToggle(true));
        dispatch(addSidebarTypes('compact-wrapper'));
      } else {
        dispatch(setSideBarToggle(false));
        dispatch(addSidebarTypes('horizontal-wrapper'))
      }
    }
  };
  useEffect(() => {
    updateSidebarBasedOnWidth();
    window.addEventListener("resize", () => {
      updateSidebarBasedOnWidth();
    });
  }, [sidebar_types]);

  return (
    <>
      <Loader />
      <Taptop />
      <div className={`page-wrapper ${sideBarToggle ? "compact-wrapper" : sidebar_types}`} id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <Outlet />
          <FooterLayout />
        </div>
      </div>
      <ThemeCustomizer />
    </>
  )
}
