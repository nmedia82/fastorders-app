import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LI, UL } from "../../../AbstractElements";
import SvgIcon from "../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { RootState } from "../../../ReduxToolkit/Store";
import { setIsSearchBarOpen } from "../../../ReduxToolkit/Reducers/Layout/LayoutReducer";
import NotificationBox from "./NotificationBox";
// import MoonLight from "./MoonLight";
import ChatHeader from "./ChatHeader";
// import CartHeader from "./CartHeader";
import ProfileHeader from "./ProfileHeader";
// import MaximizeScreen from "./MaximizeScreen";
// import BookmarkHeader from "./BookmarkHeader";

export default function RightHeader() {
  const dispatch = useDispatch();
  const { isSearchBarOpen } = useSelector((state: RootState) => state.layout);
  const handleSearch = () => {
    dispatch(setIsSearchBarOpen(!isSearchBarOpen));
  };

  return (
    <UL className="nav-menus simple-list flex-row">
      <LI>
        <span className="header-search">
          <SvgIcon iconId="search" onClick={handleSearch} />
        </span>
      </LI>
      <NotificationBox />
      <ChatHeader />

      <ProfileHeader />
    </UL>
  );
}
