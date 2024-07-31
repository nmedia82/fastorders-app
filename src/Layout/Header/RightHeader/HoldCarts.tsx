import React from "react";
import { Badges, H6, Image, LI, P, UL } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { CheckAll, Href, Notifications } from "../../../Utils/Constants";
import { dynamicImage } from "../../../Utils";
import { notiticationsData } from "../../../Data/Layout/RightHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../../ReduxToolkit/Store";
import { useDispatch } from "react-redux";
import { retrieveCart } from "../../../ReduxToolkit/Reducers/CartReducer";

export default function HoldCarts() {
  const { holdCarts } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <LI className="onhover-dropdown">
      <div className="notification-box onhover-click">
        <SvgIcon iconId="notification" />
        <Badges color="success" pill>
          {holdCarts.length}
        </Badges>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <H6 className="f-18 mb-0 dropdown-title">Hold Cart</H6>
        <UL className="simple-list">
          {holdCarts.map((cart: any, index: any) => (
            <LI
              className="d-flex"
              key={index}
              onClick={() => dispatch(retrieveCart(cart.id))}
            >
              <div>
                <P>
                  <span className="f-w-500 me-1">{`Total items`}</span>
                  {`${cart.cartItems.length}`}
                </P>
                <span className="f-light">{`cart total = ${cart.total}`}</span>
              </div>
            </LI>
          ))}
          {/* <LI>
            <a className="f-w-700" href={Href}>
              {CheckAll}
            </a>
          </LI> */}
        </UL>
      </div>
    </LI>
  );
}
