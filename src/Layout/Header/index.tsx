import React from "react";
import { Col, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import HeaderLogo from "./HeaderLogo";
import { Breadcrumbs } from "../../AbstractElements";
import { RootState } from "../../ReduxToolkit/Store";
import FullSearch from "./FullSearch";
import RightHeader from "./RightHeader";
import { setSideBarToggle } from "../../ReduxToolkit/Reducers/Layout/LayoutReducer";

export default function Header() {
  const { sideBarToggle } = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();
  const handleSidebarToggle = () => {
    dispatch(setSideBarToggle(!sideBarToggle));
  };
  return (
    <Row className={`page-header ${sideBarToggle ? "close_icon" : ""}`}>
      <HeaderLogo />
      {/* <Breadcrumbs /> */}
      <Col className="header-wrapper m-0 header-right-wrapper">
        <Row className="m-0">
          <FullSearch />
          <Col
            xs={"auto"}
            className="header-logo-wrapper p-0 left-header"
            onClick={handleSidebarToggle}
          />
          <Col
            xs={"auto"}
            className="nav-right pull-right right-header p-0 ms-auto"
          >
            <RightHeader />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
