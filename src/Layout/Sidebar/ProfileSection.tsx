import React from "react";
import { H4, Image } from "../../AbstractElements";
import { dynamicImage } from "../../Utils";
import { BasilAhmad } from "../../Utils/Constants";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

export default function ProfileSection() {
  return (
    <div className="profile-section sidebar-search">
      <div className="profile-wrapper">
        <div className="active-profile">
          <Image className="img-fluid" src={dynamicImage(`user.png`)} alt="user" />
          <div className="status bg-success"> </div>
        </div>
        <div>
          <H4>{BasilAhmad}</H4>
          <span>{"Manager"}</span>
        </div>
      </div>
      <div>
        <SvgIcon iconId="profile-setting" />
      </div>
    </div>
  );
}
