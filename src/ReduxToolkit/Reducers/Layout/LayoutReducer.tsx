import { createSlice } from "@reduxjs/toolkit";
import { LayoutStateProps } from "../../../Types/Layout.type";

const initialState: LayoutStateProps = {
  isSearchBarOpen: false,
  bookMarkClass: false,
  pinedMenu: [],
  sideBarToggle: false,
  sidebarSearchTerm: "",
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsSearchBarOpen: (state, action) => {
      state.isSearchBarOpen = action.payload;
    },
    setBookMarkClass: (state, action) => {
      state.bookMarkClass = action.payload;
    },
    setPinedMenu: (state, action) => {
      state.pinedMenu = action.payload;
    },
    setSideBarToggle: (state, action) => {
      state.sideBarToggle = action.payload;
    },
    setSidebarSearchTerm: (state, action) => {
      state.sidebarSearchTerm = action.payload;
    },
  },
});
export const {
  setIsSearchBarOpen,
  setPinedMenu,
  setSideBarToggle,
  setSidebarSearchTerm,
  setBookMarkClass,
} = LayoutSlice.actions;
export default LayoutSlice.reducer;
