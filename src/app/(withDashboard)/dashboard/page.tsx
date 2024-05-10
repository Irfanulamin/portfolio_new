import Image from "next/image";
import React from "react";
import dashboardImage from "@/asset/dashboard.jpg";

const DashboardHomepage = () => {
  return (
    <div className="min-h-[90vh] max-h-full w-full mx-auto">
      <div className="py-5">
        <h2 className="text-center text-7xl font-semibold ">
          Welcome To Admin Panel, Soldier!
        </h2>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          alt="dashboard-image"
          src={dashboardImage}
          className="h-[50rem] w-[50rem] object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardHomepage;
