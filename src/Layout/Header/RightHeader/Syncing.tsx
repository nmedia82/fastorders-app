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
      <svg
        fill="#ffffff"
        width="256px"
        height="256px"
        viewBox="-1.4 -1.4 37.80 37.80"
        data-name="Layer 2"
        id="e16a632c-ccba-4c98-9908-1bb62850a418"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M1.6,16.5a1.3,1.3,0,0,1-.2-.015,1.251,1.251,0,0,1-1.04-1.43,17.277,17.277,0,0,1,33-4.014,1.25,1.25,0,1,1-2.3.969A14.777,14.777,0,0,0,2.833,15.441,1.25,1.25,0,0,1,1.6,16.5Z"></path>
          <path d="M33.426,13.43h-.01L23.6,13.355a1.25,1.25,0,0,1,.01-2.5h.01l8.568.065.065-8.568A1.25,1.25,0,0,1,33.5,1.111h.009a1.251,1.251,0,0,1,1.241,1.26l-.074,9.818a1.251,1.251,0,0,1-1.25,1.241Z"></path>
          <path d="M17.569,34.557A17.315,17.315,0,0,1,1.64,23.963a1.25,1.25,0,1,1,2.3-.969,14.777,14.777,0,0,0,28.222-3.435,1.25,1.25,0,0,1,2.47.39A17.314,17.314,0,0,1,17.569,34.557Z"></path>
          <path d="M1.5,33.889H1.491A1.25,1.25,0,0,1,.25,32.629l.075-9.818A1.251,1.251,0,0,1,1.584,21.57l9.819.076a1.25,1.25,0,0,1-.01,2.5h-.01L2.815,24.08,2.75,32.648A1.251,1.251,0,0,1,1.5,33.889Z"></path>
        </g>
      </svg>
    </LI>
  );
}
