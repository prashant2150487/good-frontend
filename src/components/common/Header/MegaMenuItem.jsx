import React from "react";

const MegaMenuItem = ({ itemData }) => {
  console.log("itemData", itemData?.templates);

  return (
    <div className="flex flex-col gap-2 max-w-40">
      {itemData?.templates.map((template, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <span
            className="font-bold text-sm"
            dangerouslySetInnerHTML={{
              __html: template.templateData?.componentData?.title,
            }}
          />

          {
            <div className="max-w-35">
              <img
                src={template?.templateData?.componentData?.src}
                className=""
              />
            </div>
          }
          {template.templateData?.children.map((child, cIdx) => (
            <>
              {child?.componentData?.src && (
                <div>
                  <img
                    src={child?.componentData?.src}
                    alt="img"
                    className="max-w-35"
                  />
                </div>
              )}
              <span
                key={cIdx}
                className="text-xs"
                dangerouslySetInnerHTML={{
                  __html:
                    child?.componentData?.text || child?.componentData?.heading,
                }}
              />
            </>
          ))}
        </div>
      ))}
      {/* <span
        className="font-bold text-sm"
        dangerouslySetInnerHTML={{
          __html: itemData?.templates?.[0]?.templateData?.componentData?.title,
        }}
      />
      <div>
        {itemData?.templates?.[0]?.templateData?.componentData?.src && (
          <img
            src={itemData?.templates?.[0]?.templateData?.componentData?.src}
            alt="Mega Menu"
            className="w-20 h-20 object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        {itemData?.templates?.[0]?.templateData?.children?.map((child, idx) => (
          <span key={idx} className="text-xs">
            {child?.componentData.text || child?.componentData?.heading}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default MegaMenuItem;
