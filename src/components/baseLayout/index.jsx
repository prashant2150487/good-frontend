import React from "react";
import Header from "../common/Header";
import AnnouncementBar from "../common/announcementbar";

const BaseLayout = ({children}) => {
  return <div>
    <AnnouncementBar/>
    <Header/>

    {children}</div>;
};

export default BaseLayout;
