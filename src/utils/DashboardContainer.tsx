import React from "react";

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-black w-full max-w-[1920px] mx-auto px-2 md:px-12  lg:px-24 ">
      {children}
    </div>
  );
};

export default DashboardContainer;
