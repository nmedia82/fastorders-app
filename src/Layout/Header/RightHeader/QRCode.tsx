/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { LI } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Utils";
export default function QRCodePage() {
  return (
    <LI className="cart-nav onhover-dropdown">
      <div>
        <Link to={"/qrcode"}>
          {/* <SvgIcon iconId="qr-code" /> */}
          <Image
            className="img-fluid"
            style={{ width: "20px", height: "20px" }}
            src={dynamicImage(`qrcode/qrcode.png`)}
            alt=""
          />
        </Link>
      </div>
    </LI>
  );
}
