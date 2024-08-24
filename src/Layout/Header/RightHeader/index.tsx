/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LI, UL } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { RootState } from "../../../ReduxToolkit/Store";
import { setIsSearchBarOpen } from "../../../ReduxToolkit/Reducers/Layout/LayoutReducer";
import NotificationBox from "./NotificationBox";
// import MoonLight from "./MoonLight";
import Registers from "./Registers";
// import CartHeader from "./CartHeader";
import ProfileHeader from "./ProfileHeader";
import HoldCarts from "./HoldCarts";
import CartHeaderList from "./CartHeader/CartHeaderList";
import OrdersNotificationBox from "./OrderNotifications";
import QRCodePage from "./QRCode";
// import MaximizeScreen from "./MaximizeScreen";
// import BookmarkHeader from "./BookmarkHeader";

export default function RightHeader() {
  const dispatch = useDispatch();
  const { isSearchBarOpen } = useSelector((state: RootState) => state.layout);
  const { holdCarts, newOrders } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <UL className="nav-menus simple-list flex-row">
      {/* <LI>
        <span className="header-search">
          <SvgIcon iconId="search" onClick={handleSearch} />
        </span>
      </LI> */}
      {holdCarts.length > 0 && <HoldCarts holdCarts={holdCarts} />}
      {/* <NotificationBox /> */}
      <OrdersNotificationBox newOrders={newOrders} />
      {/* <Registers /> */}
      <Registers />
      <QRCodePage />

      <ProfileHeader />
    </UL>
  );
}
