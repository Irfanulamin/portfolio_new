import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import SingleProjectImage from "./SingleProjectImage";

const SingleProject = ({ singleProjectData }: any) => {
  return (
    <div className="flex justify-center items-start lg:items-center  gap-2 flex-col lg:flex-row my-5">
      <SingleProjectImage image={singleProjectData.project_image} />

      <div className="p-4 w-100% lg:w-1/2">
        <h2 className="text-3xl font-bold text-black">
          {singleProjectData.project_name}
        </h2>
        <p className="text-sm font-semibold py-2 ">
          {singleProjectData.project_description}
        </p>
        <ul>
          {singleProjectData.features.length > 0 &&
            singleProjectData.features.map(
              (featureData: string, index: any) => (
                <li key={index}>
                  <p className="text-base font-medium">
                    <span className="text-amber-400 text-lg md:text-2xl lg:text-3xl">
                      .{" "}
                    </span>
                    {featureData}
                  </p>
                </li>
              )
            )}
        </ul>
        <div className="flex gap-2 py-2">
          <Link
            href={singleProjectData.deploy_link}
            target="blank"
            className="bg-black text-white py-1 lg:py-2 px-4 lg:px-12 font-semibold smooth_transition hover:text-black hover:bg-white border hover:border-black flex items-center gap-1.5"
          >
            View <FiArrowRightCircle />
          </Link>
          <Link
            href={singleProjectData.github_link}
            target="blank"
            className="hover:bg-black hover:text-white py-1 lg:py-2 px-4 lg:px-12 font-semibold smooth_transition text-black bg-white border border-black flex items-center gap-1.5"
          >
            Project <FaLocationArrow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
