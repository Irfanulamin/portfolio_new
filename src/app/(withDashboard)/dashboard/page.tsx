/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import dashboardImage from "@/asset/dashboard.jpg";
import Link from "next/link";

const DashboardHomepage = () => {
  return (
    <div className="min-h-[90vh] max-h-full w-full mx-auto">
      <div className="py-5">
        <h2 className="text-center text-5xl font-semibold ">
          Welcome To Admin Panel, Soldier!
        </h2>
        <p className=" hover:underline text-center py=2">
          "Customize your data here. Update or delete as needed. Manage your
          information efficiently."
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          alt="dashboard-image"
          src={dashboardImage}
          className="h-[40rem] w-[40rem] object-cover "
        />
      </div>
      <p className=" hover:underline text-center py=2">
        Want To Go Back To Homepage ?{" "}
        <Link href="/" className="text-blue-600">
          Home
        </Link>
      </p>
    </div>
  );
};

export default DashboardHomepage;
