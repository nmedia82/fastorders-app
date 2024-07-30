import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { SocialLinksProp } from "../../Types/Others.type";
import { H6, P } from "../../AbstractElements";
import {
  CreateAccount,
  FacebookLink,
  LinkedIn,
  SignInWith,
  TwitterLink,
} from "../../Utils/Constants";

export default function SocialLinks({ logtext, btntext }: SocialLinksProp) {
  return (
    <>
      <H6 className="text-muted mt-4 or">{SignInWith}</H6>

      <P className="mt-4 mb-0 text-center">
        {logtext ? logtext : "Don't have account?"}
        {!logtext && !btntext ? (
          <Link className="ms-2" to={`${process.env.PUBLIC_URL}/sign_up`}>
            {CreateAccount}
          </Link>
        ) : (
          <Link to={`${process.env.PUBLIC_URL}/login`} className="ms-2">
            {btntext}
          </Link>
        )}
      </P>
    </>
  );
}
