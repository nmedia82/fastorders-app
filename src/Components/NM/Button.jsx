import React from "react";

export const ZMButton = ({ placeholder, theme = "primary", onClick, icon }) => {
  return (
    <>
      <button className={`btn btn-${theme}`} onClick={onClick}>
        {icon && <i className={`icon-${icon} me-2`}></i>}
        {placeholder}
      </button>
    </>
  );
};
