import React from "react";
import { Link } from "react-router-dom";
import MegaMenuItem from "./MegaMenuItem";

const MegaMenu = ({ megaMenuData }) => {
  // const leftMenu = headerData?.results?.[l1Index]?.leftMenu || [];
  // const rightMenu = headerData?.results?.[l1Index]?.rightMenu || [];
  console.log("leftMenu", megaMenuData?.columns);

  return (
    <div className="min-h-80 p-4 ">
      <div className="flex gap-6 justify-center">
        {megaMenuData?.columns?.map((item, idx) => (
          <MegaMenuItem itemData={item} key={idx} />
        ))}

        {/* Left Menu */}
        {/* <div className={`flex gap-6`}>
          {leftMenu.map((item, idx) => (
            <div key={`left-${idx}`} className="mb-4 w-fit">
              <Link to={item?.url || "#"} className="font-bold text-lg">
                {item?.name}
              </Link>
              <ul className="list-none">
                {item?.children?.map((child, cIdx) => (
                  <li key={`left-child-${cIdx}`}>{child?.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Right Menu */}
        {/* <div className={`flex grid-cols-${rightMenu.length} gap-5`}>
          {rightMenu.map((item, idx) => {
            const rightItem = item?.[0]; 
            return (
              <div key={`right-${idx}`} className={`mb-4`}>
                <Link to={rightItem?.url || "#"} className="font-bold text-lg">
                  {rightItem?.name}
                </Link>
                <ul className="list-none">
                  {rightItem?.children?.map((child, cIdx) => (
                    <li key={`right-child-${cIdx}`}>
                      <Link to={child?.url || "#"}>{child?.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default MegaMenu;
