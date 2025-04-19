import React from "react";
import Header from "../common/Header";
import AnnouncementBar from "../common/announcementbar";
import Loader from "../common/Loader";
import Footer from "../common/footer";
import { Toaster } from "../ui/sonner";
const BaseLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      {children}
      <Loader />
      <Footer />
      <Toaster
        position="top-right"
        // expand={false}
      />
    </div>
  );
};

export default BaseLayout;
