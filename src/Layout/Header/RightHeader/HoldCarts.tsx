import { Badges, H6, LI, P, UL } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { useDispatch } from "react-redux";
import { retrieveCart } from "../../../ReduxToolkit/Reducers/CartReducer";
import { getFormattedPrice } from "../../../services/helper";

export default function HoldCarts({ holdCarts }: { holdCarts: any }) {
  const dispatch = useDispatch();

  return (
    <LI className="onhover-dropdown">
      <div className="notification-box onhover-click">
        <SvgIcon iconId="pause" />
        <Badges color="success" pill style={{ color: "white" }}>
          {`${holdCarts.length} `}
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
                <P style={{ textAlign: "left" }}>
                  <span className="f-w-500">{`Cart# ${index + 1}`}</span>
                  {`${cart.cartItems.length}`}
                </P>
                <span className="f-light">{`cart total = ${getFormattedPrice(
                  cart.total
                )}`}</span>
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
