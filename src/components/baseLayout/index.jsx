import React from "react";
import Header from "../common/Header";
import AnnouncementBar from "../common/announcementbar";
import Loader from "../common/Loader";

const BaseLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      {children}
      <Loader />
    </div>
  );
};

export default BaseLayout;
