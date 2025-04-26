import React from "react";
const OurJourneyBanner = ({imgSrc}) => {
  return (
    <>
      <div className="w-full ">
        <img src={imgSrc} alt="Our Journey" className="w-full  object-cover" />
      </div>
    </>
  );
};
export default OurJourneyBanner;
