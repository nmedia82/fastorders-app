import React from "react";
import { Link } from "react-router-dom";
import { H4, Image, LI, UL } from "../../../AbstractElements";
import { dynamicImage } from "../../../Utils";
import { BasilAhmad } from "../../../Utils/Constants";
import { profileHeaderData } from "../../../Data/Layout/RightHeader";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { getCurrentUser } from "../../../services/auth";

export default function ProfileHeader() {
  const logout = () => {
    localStorage.clear();
  };

  const user = getCurrentUser();

  return (
    <LI className="profile-nav onhover-dropdown">
      <div className="onhover-click">
        <div className="sidebar-image">
          <Image src={dynamicImage(`user.png`)} alt="profile" />
          <span className="status status-success"></span>
        </div>
        <div className="sidebar-content">
          <H4>{user && user.user.display_name}</H4>
          <span className="f-12 f-w-600 f-light">
            {user && user?.business_info?.business_name}
          </span>
        </div>
      </div>
      <UL className="profile-dropdown onhover-show-div simple-list">
        {profileHeaderData.map((item, index) => (
          <LI key={index}>
            <Link to={`${process.env.PUBLIC_URL}/${item.link}`}>
              <div className="profile-icon">
                <SvgIcon iconId={item.icon} />
              </div>
              <span>{item.text} </span>
            </Link>
          </LI>
        ))}
        <LI>
          <Link onClick={logout} to={`${process.env.PUBLIC_URL}/login`}>
            <div className="profile-icon">
              <SvgIcon iconId="login" />
            </div>
            <span>{"Log out "}</span>
          </Link>
        </LI>
      </UL>
    </LI>
  );
}
