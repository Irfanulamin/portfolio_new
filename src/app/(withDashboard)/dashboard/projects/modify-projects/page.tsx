import React from "react";
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
import { blogPosts } from "@/utils/data/blogData";
import Image from "next/image";
import { PiNutDuotone } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import project_data from "@/utils/data/myProjects";

const ModifyProjecrtspage = () => {
  return (
    <Table>
      <TableCaption>A list of your recent blogs.</TableCaption>
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
        {project_data.map((singlePostData, index) => (
          <TableRow key={index}>
            <TableCell>
              <Image
                alt={singlePostData.project_name}
                src={singlePostData.project_image}
                width={400}
                height={400}
                className=" object-top w-full h-44 object-cover"
              />
            </TableCell>
            <TableCell className="font-medium">
              <p className="text-base font-medium">
                {singlePostData.project_name}
              </p>
            </TableCell>
            <TableCell>
              <p className="text-xs text-wrap">
                {singlePostData.project_image}
              </p>
            </TableCell>
            <TableCell>
              <p className="text-xs  text-wrap">{singlePostData.github_link}</p>
            </TableCell>
            <TableCell>
              <p className="text-xs  text-wrap">{singlePostData.deploy_link}</p>
            </TableCell>
            <TableCell>
              <ul className="text-xs  text-wrap">
                {singlePostData.features &&
                  singlePostData.features.map((featureContent, index) => (
                    <li key={index}>- {featureContent}</li>
                  ))}
              </ul>
            </TableCell>
            <TableCell>
              <p className="text-xs  text-wrap">
                {singlePostData.project_description}
              </p>
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <PiNutDuotone className="bg-yellow-500  rounded-full h-8 w-8 m-2 p-1" />
                </DialogTrigger>
                <DialogContent className="max-w-[1020px]">
                  <DialogHeader>
                    <DialogTitle>
                      <p className="text-green-800">Edit Project</p>
                    </DialogTitle>
                    <DialogDescription>
                      Make changes to your project here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="name" className="text-right">
                        Title
                      </Label>
                      <Input
                        id="name"
                        defaultValue={singlePostData.project_name}
                      />
                    </div>
                    <div>
                      <Label className="text-right">Image Link</Label>
                      <Input defaultValue={singlePostData.project_image} />
                    </div>
                    <div>
                      <Label className="text-right">Github Link</Label>
                      <Input defaultValue={singlePostData.github_link} />
                    </div>
                    <div>
                      <Label className="text-right">Deploy Link</Label>
                      <Input defaultValue={singlePostData.deploy_link} />
                    </div>
                    <div>
                      <Label className="text-right">Features</Label>
                      {singlePostData.features &&
                        singlePostData.features.map((featureContent, index) => (
                          <Input
                            key={index}
                            className="my-2"
                            defaultValue={featureContent}
                          />
                        ))}
                    </div>
                    <div className="">
                      <Label className="text-right">Content</Label>
                      <Textarea
                        id="content"
                        className=" w-full"
                        defaultValue={singlePostData.project_description}
                        placeholder="Type your message here."
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
                      <p className="text-red-500">Deleting Your Project ? </p>
                    </DialogTitle>
                    <DialogDescription>
                      Remember, Take a moment to double-check before saying
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

export default ModifyProjecrtspage;
