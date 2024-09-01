/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { LI } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Utils";
export default function Syncing() {
  return (
    <LI className="cart-nav onhover-dropdown flex">
      {/* <SvgIcon iconId="qr-code" /> */}
      <i className="fa fa-refresh flex font-white"></i>
    </LI>
  );
}
