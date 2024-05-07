import Container from "@/utils/Container";
import project_data from "@/utils/data/myProjects";
import React from "react";
import SingleProject from "./SingleProject";
import { FaRegImages } from "react-icons/fa";

const AllProjects = () => {
  return (
    <Container>
      <div>
        <div className="m-2 md:m-6 lg:m-12 bg-amber-600 p-2  flex gap-1.5 justify-center items-center ">
          <div>
            <p className="text-black text-3xl md:text-5xl lg:text-5xl inline-block  font-semibold ">
              My Projects
            </p>
          </div>
          <div>
            <FaRegImages className="w-12 h-12 text-black" />
          </div>
        </div>
      </div>
      <div className="border border-black py-6 md:py-12 lg:py-24 px-4">
        {project_data.map((singleProjectData, index) => (
          <SingleProject
            singleProjectData={singleProjectData}
            key={index}
          ></SingleProject>
        ))}
      </div>
    </Container>
  );
};

export default AllProjects;
