/* eslint-disable react/no-unescaped-entities */
import React from "react";

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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { PiNutDuotone } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { skillsData } from "@/utils/data/imagesData";

const ModifySkillsPage = () => {
  return (
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
        {skillsData.map((singleSkillData, index) => (
          <TableRow key={index}>
            <TableCell>
              <Image
                alt={singleSkillData.title}
                src={singleSkillData.imageUrl}
                width={200}
                height={200}
                className="h-24 w-24 object-cover"
              />
            </TableCell>
            <TableCell className="font-medium">
              <p className="text-lg font-medium">{singleSkillData.title}</p>
            </TableCell>
            <TableCell>
              <p className="text-base text-wrap">{singleSkillData.imageUrl}</p>
            </TableCell>

            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <PiNutDuotone className="bg-yellow-500  rounded-full h-8 w-8 m-2 p-1" />
                </DialogTrigger>
                <DialogContent className="w-[400px] md:w-[900px] lg:w-[1020px]">
                  <DialogHeader>
                    <DialogTitle>
                      <p className="text-green-800">Edit Blog</p>
                    </DialogTitle>
                    <DialogDescription>
                      Make changes to your blog here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="name" className="text-right">
                        Title
                      </Label>
                      <Input id="name" defaultValue={singleSkillData.title} />
                    </div>
                    <div>
                      <Label htmlFor="username" className="text-right">
                        Image Link
                      </Label>
                      <Input
                        id="username"
                        defaultValue={singleSkillData.imageUrl}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <button className="bg-green-400 text-green-900 font-medium  p-1 rounded">
                      Save changes
                    </button>
                    <DialogClose>
                      <button className=" text-red-500 font-medium  p-1 ro">
                        Close
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
                    <button className="bg-red-200 text-red-500 font-medium  p-1 rounded">
                      Delete Blog
                    </button>
                    <DialogClose>
                      <button className="font-medium p-1 ">Close</button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ModifySkillsPage;
