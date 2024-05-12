"use client";
import React, { useState } from "react";
/* eslint-disable react/no-unescaped-entities */

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import { PiNutDuotone } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";

import {
  useDeleteProjectsMutation,
  useGetProjectsQuery,
} from "@/redux/api/projectsApi";
import { TProjectData } from "@/types/types";
import ProjectUpdateModal from "@/components/ui/ProjectUpdateModal";

const ModifyProjecrtspage = () => {
  const { data: project_data } = useGetProjectsQuery("");
  const [mutateProject] = useDeleteProjectsMutation();
  const handleDelete = (id: string) => {
    mutateProject(id);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProjectData | null>(
    null
  );

  const handleShowModal = (selectedID: string) => {
    const selectedProjectDetails = project_data.find(
      (Project: TProjectData) => Project._id === selectedID
    );
    setSelectedProject(selectedProjectDetails);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <>
        {showModal && (
          <ProjectUpdateModal
            onClose={handleCloseModal}
            singleProjectData={selectedProject}
          />
        )}
      </>
      <Table>
        <TableCaption>
          <p className="py-6">A list of your recent Projects.</p>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Overview</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Deploy</TableHead>
            <TableHead>Features</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {project_data &&
            project_data.map(
              (singleProjectData: TProjectData, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    {singleProjectData.project_image && (
                      <Image
                        alt={singleProjectData.project_name}
                        src={singleProjectData.project_image}
                        width={400}
                        height={400}
                        className=" object-top w-full h-44 object-cover"
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <p className="text-base font-semibold">
                      {singleProjectData.project_name}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs text-blue-500 underline">
                      {singleProjectData.project_image}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs  font-medium">
                      {singleProjectData.github_link}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs  font-medium">
                      {singleProjectData.deploy_link}
                    </p>
                  </TableCell>
                  <TableCell>
                    <ul className="text-xs  text-wrap">
                      {singleProjectData.features &&
                        singleProjectData.features.map(
                          (featureContent, index) => (
                            <li key={index}>
                              <p className="text-green-600">
                                <span className="text-black">-</span>
                                {featureContent}
                              </p>
                            </li>
                          )
                        )}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <p className="text-xs  text-wrap">
                      {singleProjectData.project_description}
                    </p>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() =>
                        handleShowModal(singleProjectData._id as string)
                      }
                      className="bg-yellow-500 p-1 rounded-full hover:bg-yellow-600 smooth_transition"
                    >
                      <PiNutDuotone className="h-6 w-6" />
                    </button>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <MdDeleteOutline className="bg-red-500  rounded-full h-8 w-8 m-2 p-1" />
                      </DialogTrigger>
                      <DialogContent className="w-[200px] md:w-[900px] lg:w-[1020px]">
                        <DialogHeader>
                          <DialogTitle>
                            <p className="text-red-500">
                              Deleting Your Project ?{" "}
                            </p>
                          </DialogTitle>
                          <DialogDescription>
                            Remember, Take a moment to double-check before
                            saying goodbye to your info.
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                          <DialogClose>
                            <button
                              onClick={() =>
                                handleDelete(singleProjectData._id as string)
                              }
                              className="bg-red-200 text-red-500 font-medium  p-1 rounded"
                            >
                              Delete Project
                            </button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </>
  );
};

export default ModifyProjecrtspage;
