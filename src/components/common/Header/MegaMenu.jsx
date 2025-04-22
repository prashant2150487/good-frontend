import React from "react";

const MegaMenu = ({ headerData }) => {
  console.log("headerData", headerData);
  return (
    <div className="min-h-52 bg-amber-200">
      <div className="grid grid-col-6 gap-4">
        {headerData?.menu_columns[0]?.l1_menu?.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
