import React from "react";
import Footer from "../common/footer";
import OurWorldHeader from "../common/ourWorldHeader";
const OurWorldLayout = ({ children }) => {
  return (
    <>
      <OurWorldHeader />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default OurWorldLayout;
