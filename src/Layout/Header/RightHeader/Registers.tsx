/** @format */

import React from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { Badges, H6, Image, LI, P, UL } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { dynamicImage } from "../../../Utils";
import { JaneCooper } from "../../../Utils/Constants";
import { chatHeaderData } from "../../../Data/Layout/RightHeader";
import { Link } from "react-router-dom";
export default function Registers() {
  return (
    <LI className="cart-nav onhover-dropdown">
      <div>
        <Link to="/registers">
          <SvgIcon iconId="book" />
        </Link>
      </div>
    </LI>
  );
}
