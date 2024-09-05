import React from "react";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { Href } from "../../../Utils/Constants";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { H6, P } from "../../../AbstractElements";
const addProductNav = [
  {
    id: 1,
    icon: "product-detail",
    title: "Add Employee Details",
    subTitle: "Add Employee name & details",
  },
  {
    id: 2,
    icon: "Employee-gallery",
    title: "Employee Gallery",
    subTitle: "Picture",
  },
];
export default function FormNav({ steps, setSteps }) {
  return (
    <Col xxl={3} xl={4} className="box-col-4e sidebar-left-wrapper">
      <Nav className="sidebar-left-icons" pills>
        {addProductNav.map((data) => (
          <NavItem key={data.id}>
            <NavLink
              className={`${steps === data.id ? "active" : ""}`}
              href={Href}
              onClick={() => setSteps(data.id)}
            >
              <div className="nav-rounded">
                <div className="product-icons">
                  <SvgIcon className="stroke-icon" iconId={data.icon} />
                </div>
              </div>
              <div className="product-tab-content">
                <H6>{data.title}</H6>
                <P>{data.subTitle}</P>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
}
