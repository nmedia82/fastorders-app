import React from "react";
import { Link } from "react-router-dom";
import { LoginFormProp } from "../../../../../Types/Others.type";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Utils";

export default function CommonLogo({ logoClass }: LoginFormProp) {
  return (
    <Link className={`logo ${logoClass}`} to={`${process.env.PUBLIC_URL}/dashboard/`}>
      <Image
        className="img-fluid for-light"
        src={dynamicImage(`logo/logo.png`)}
        alt="looginpage"
        body={true}
      />
      <Image
        className="img-fluid for-dark"
        src={dynamicImage(`logo/logo_dark.png`)}
        alt="looginpage"
        body={true}
      />
    </Link>
  );
}
