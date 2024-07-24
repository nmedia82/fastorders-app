import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { MenuListType, SidebarItemType } from "../../Types/Layout.type";
import { RootState } from "../../ReduxToolkit/Store";
import { setPinedMenu } from "../../ReduxToolkit/Reducers/Layout/LayoutReducer";
import { Badges, LI, UL } from "../../AbstractElements";
import { Href } from "../../Utils/Constants";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

export default function SidebarSubMenu({
  menu,
  setActiveMenu,
  activeMenu,
  level,
}: MenuListType) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const { pinedMenu } = useSelector((state: RootState) => state.layout);
  const handlePined = (value: string) => {
    if (!pinedMenu.includes(value)) {
      dispatch(setPinedMenu([...pinedMenu, value]));
    } else {
      let filterMenu = pinedMenu.filter((item) => item !== value);
      dispatch(setPinedMenu(filterMenu));
    }
  };
  const ActiveNavLinkUrl = (path?: string) => {
    return location.pathname === path ? true : "";
  };
  function shouldSetActive({ item }: { item: SidebarItemType }): boolean {
    var returnValue = false;
    if (item?.url === location.pathname) {
      returnValue = true;
    }
    if (!returnValue && item?.menu) {
      item?.menu.every((subItem: SidebarItemType) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  }
  useEffect(() => {
    menu.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);
  return (
    <>
      {menu.map((item, i) => (
        <LI
          key={i}
          className={`${level === 0 ? "sidebar-list" : ""} ${
            item.title && pinedMenu.includes(item.title) ? "pined" : ""
          } ${
            (item.menu
              ? item.menu
                  .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                  .includes(true)
              : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title
              ? "active"
              : ""
          }`}
        >
          {/* {level === 0 && (
            <i
              className="fa fa-thumb-tack"
              onClick={() => item.title && handlePined(item.title)}
            ></i>
          )} */}
          {item.badge ? (
            <Badges color={item.badgeColor}>{item.badgeName}</Badges>
          ) : (
            ""
          )}
          <Link
            className={`${level === 0 ? "sidebar-link sidebar-title" : ""} ${
              (item.menu
                ? item.menu
                    .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                    .includes(true)
                : ActiveNavLinkUrl(item.url)) ||
              activeMenu[level] === item.title
                ? "active"
                : ""
            }`}
            to={item.url ? item.url : Href}
            onClick={() => {
              const temp = activeMenu;
              temp[level] = item.title !== temp[level] ? item.title : "";
              setActiveMenu([...temp]);
            }}
          >
            {item.icon && (
              <SvgIcon className="stroke-icon" iconId={`stroke-${item.icon}`} />
            )}
            {level === 0 ? (
              <span className="lan-3">{t(`${item.title}`)}</span>
            ) : (
              t(`${item.title}`)
            )}
            {item.menu && (
              <div className="according-menu">
                {activeMenu[level] === item.title ? (
                  <i className="fa fa-angle-down" />
                ) : (
                  <i className="fa fa-angle-right" />
                )}
              </div>
            )}
          </Link>
          {item.menu && (
            <UL
              className={`simple-list ${
                level !== 0
                  ? "nav-sub-childmenu submenu-content"
                  : "sidebar-submenu"
              }`}
              style={{
                display: `${
                  (item.menu
                    ? item.menu
                        .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                        .includes(true)
                    : ActiveNavLinkUrl(item.url)) ||
                  activeMenu[level] === item.title
                    ? "block"
                    : "none"
                }`,
              }}
            >
              <SidebarSubMenu
                menu={item.menu}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                level={level + 1}
              />
            </UL>
          )}
        </LI>
      ))}
    </>
  );
}
