import { setCountryData } from "@/features/countryData/countryDataSlice";
import { getCountryStateCity } from "@/services/user";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const fetchCountryStateCityData = async () => {
    try {
      const data = await getCountryStateCity();
      dispatch(setCountryData(data));
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchCountryStateCityData();
  }, []);

  return <div>Footer</div>;
};

export default Footer;
