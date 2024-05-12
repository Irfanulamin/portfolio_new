import Container from "@/utils/Container";
import React from "react";
import SingleProject from "./SingleProject";
import { CgWebsite } from "react-icons/cg";
import { TProjectData } from "@/types/types";

const AllProjects = async () => {
  const res = await fetch(process.env.PROJECTS_URL as string);
  const project_data = await res.json();
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
        {project_data.map((singleProjectData: TProjectData, index: number) => (
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
