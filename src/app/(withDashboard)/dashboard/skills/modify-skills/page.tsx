"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { PiNutDuotone } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import {
  useDeleteSkillsMutation,
  useGetSkillsQuery,
} from "@/redux/api/skillsApi";
import { TSingleSkillData } from "@/types/types";
import Modal from "@/components/ui/Modal";
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ModifySkillsPage = () => {
  const { data: skillsDatas } = useGetSkillsQuery("");
  const [mutateSkill] = useDeleteSkillsMutation();

  const [showModal, setShowModal] = useState(false);
  const [selectedSupply, setSelectedSupply] = useState<TSingleSkillData | null>(
    null
  );

  const handleShowModal = (selectedID: string) => {
    const selectedSupplyDetails = skillsDatas.find(
      (skill: TSingleSkillData) => skill._id === selectedID
    );
    setSelectedSupply(selectedSupplyDetails);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    mutateSkill(id);
  };

  return (
    <>
      <>
        {showModal && (
          <Modal onClose={handleCloseModal} singleSkillData={selectedSupply} />
        )}
      </>
      <Table>
        <TableCaption>A list of your recent skills.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Overview</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skillsDatas &&
            skillsDatas.map((singleSkillData: any, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  {singleSkillData.imageUrl && (
                    <Image
                      alt={singleSkillData.title}
                      src={singleSkillData.imageUrl}
                      width={200}
                      height={200}
                      className="h-24 w-24 object-cover"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <p className="text-lg font-semibold">
                    {singleSkillData.title}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-base text-blue-500 underline">
                    {singleSkillData.imageUrl}
                  </p>
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => handleShowModal(singleSkillData._id)}
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
                          <p className="text-red-500">Deleting Your Blog ? </p>
                        </DialogTitle>
                        <DialogDescription>
                          Remember,Take a moment to double-check before saying
                          goodbye to your info.
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter>
                        <DialogClose>
                          <Button
                            onClick={() => handleDelete(singleSkillData._id)}
                            className="bg-red-200 text-red-500 font-medium  p-1 rounded"
                          >
                            Delete Blog
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ModifySkillsPage;
