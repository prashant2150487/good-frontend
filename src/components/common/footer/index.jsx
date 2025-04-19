import { Input } from "@/components/ui/input";
import { setCountryData } from "@/features/countryData/countryDataSlice";
import { getCountryStateCity } from "@/services/user";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import bgImage1 from "../../../assets/Band_copy.jpg";

const Footer = () => {
  const dispatch = useDispatch();
  // const fetchCountryStateCityData = async () => {
  //   try {
  //     const data = await getCountryStateCity();
  //     dispatch(setCountryData(data));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // useEffect(() => {
  //   fetchCountryStateCityData();
  // }, []);

  return (
    <footer
      className="text-white py-4 text-center"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <div
        className="mx-auto flex flex-col items-center bg-cover"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        <div className="max-w-sm text-black p-7 flex flex-col gap-4">
          <span className="text-sm font-bold">BE IN THE KNOW</span>
          <p className="text-xs font-normal text-center">
            By signing up for alerts, you agree to receive e-mails, calls and
            text messages from Goodearth. To know more how we keep your data
            safe, refer to our Privacy Policy
          </p>
          <Input
            placeholder="Enter your email"
            type="email"
            className="max-w-sm bg-white border-0 rounded-none"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
