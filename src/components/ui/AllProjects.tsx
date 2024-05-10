import Container from "@/utils/Container";
import project_data from "@/utils/data/myProjects";
import React from "react";
import SingleProject from "./SingleProject";
import { FaRegImages } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const AllProjects = () => {
  return (
    <Container>
      <div>
        <div className="my-2 md:my-6 lg:my-12 bg-black py-4  flex gap-2 justify-center items-center rounded ">
          <div>
            <p className=" text-3xl md:text-5xl lg:text-5xl inline-block text-white  font-semibold ">
              My Projects
            </p>
          </div>
          <div>
            <CgWebsite className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto">
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
