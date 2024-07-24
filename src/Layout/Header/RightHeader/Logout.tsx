import React from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import { Badges, H6, Image, LI, P, UL } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { dynamicImage } from "../../../Utils";
import { JaneCooper } from "../../../Utils/Constants";
import { chatHeaderData } from "../../../Data/Layout/RightHeader";

export default function Logout() {
  return (
    <LI className="cart-nav onhover-dropdown">
      <div className="cart-box onhover-click">
        <i
          className="icofont icofont-logout "
          style={{
            fontSize: "17px",
            color: "white",
            backgroundColor: "#e70404",
            padding: "3px",
            borderRadius: "6px",
          }}
        ></i>
        {/* <Badges color="danger" pill>
          {"2"}
        </Badges> */}
      </div>
      {/* <div className="onhover-show-div chat-dropdown">
                <div className="dropdown-title">
                    <div className="d-flex align-items-center">
                        <Image className="img-fluid img-40 rounded-circle" src={dynamicImage(`dashboard/user/1.jpg`)} alt="user"/>
                        <div>
                            <H6 className="f-18 mb-0">{JaneCooper}</H6>
                            <P className="mb-0"><span className="status status-success me-1"></span><span>{'active'}</span></P>
                        </div>
                    </div>
                </div>
                <UL>
                    {chatHeaderData.map((item) => (
                        <LI className="send-msg" key={item.id}>
                            <div>
                                <Image className="img-fluid img-30 rounded-circle" src={dynamicImage(`dashboard/user/${item.image}`)} alt="user" />
                                <div>
                                    <P>{item.text}</P>
                                </div>
                            </div>
                        </LI>
                    ))}
                </UL>
                <div className="chat-input">
                    <InputGroup>
                        <Input type="text" placeholder="Type message here..." />
                        <InputGroupText className="bg-primary"><SvgIcon iconId='send' /></InputGroupText>
                    </InputGroup>
                </div>
            </div> */}
    </LI>
  );
}
