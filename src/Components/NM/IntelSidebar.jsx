import React, { useState, useEffect } from "react";
import { Nav, NavItem, Card, CardBody } from "reactstrap";
import { matchPath, Link, useLocation } from "react-router-dom";
import classNames from "classnames";
const IntelSidebar = ({ navItems }) => {
  const location = useLocation();
  const [activeParent, setActiveParent] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname;
    navItems.forEach((item) => {
      item.children.forEach((child) => {
        if (matchPath(child.path, currentPath)) {
          setActiveParent(item.parent);
        }
      });
    });
  }, [location.pathname, navItems]);

  const handleParentClick = (parent) => {
    setActiveParent((prev) => (prev === parent ? null : parent));
  };

  return (
    <Card>
      <CardBody>
        <Nav vertical>
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <NavItem
                tag={Link}
                to={item.basePath}
                className={classNames({
                  "w-100": true,
                  rounded: true,
                  "mb-2": true,
                  "p-2": true,
                  "ps-3": true,
                  "bg-theme-orange": activeParent === item.parent,
                  "text-white": activeParent === item.parent,
                  "bg-theme-grey": activeParent !== item.parent,
                  "text-black": activeParent !== item.parent,
                })}
                onClick={() => handleParentClick(item.parent)}
                style={{ cursor: "pointer" }}
              >
                {item.parent}
              </NavItem>
              {activeParent === item.parent &&
                item.children.map(
                  (child, childIndex) =>
                    !!child.label && ( // Check if label exists and is not empty
                      <NavItem
                        key={childIndex}
                        className="w-100 p-2 d-flex align-items-center text-black"
                        tag={Link}
                        to={child.path}
                      >
                        <img
                          src="/assets/images/arrow-intel.png"
                          alt="arrow icon"
                          style={{ marginRight: "2px", width: 20 }}
                        />
                        {child.label}
                      </NavItem>
                    )
                )}
            </React.Fragment>
          ))}
        </Nav>
      </CardBody>
    </Card>
  );
};

export default IntelSidebar;
