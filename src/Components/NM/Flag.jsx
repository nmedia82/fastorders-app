import React from "react";
import { useSelector } from "react-redux";
import { getCountriesFlagCode } from "../../Global/shops";

export default function Flag(country_name, style) {
  const countries = useSelector((state) => state.auth.allCountries);
  const flagCodes = getCountriesFlagCode();
  if (!country_name) return;
  const found_country = countries.find(
    (country) => country.country_name === country_name
  );
  const found_flag = flagCodes.find(
    (flag) => flag.country_code === found_country?.phone_code
  );
  return <i className={`fi fi-${found_flag.icon_code} ml-2`} style={style}></i>;
}
