/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
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
import { useDeleteBlogsMutation, useGetBlogsQuery } from "@/redux/api/blogsApi";
import { Button } from "@/components/ui/button";
import { TBlogData } from "@/types/types";
import BlogUpdateModal from "@/components/ui/BlogUpdateModal";
import { decodeHtmlString } from "@/utils/BlogJsonToHtml";

const ModifyBlogs = () => {
  const { data: blogPosts } = useGetBlogsQuery("");

  const [mutateBlog] = useDeleteBlogsMutation();
  const handleDelete = (id: string) => {
    mutateBlog(id);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<TBlogData | null>(null);

  const handleShowModal = (selectedID: string) => {
    const selectedBlogDetails = blogPosts.find(
      (skill: TBlogData) => skill._id === selectedID
    );
    setSelectedBlog(selectedBlogDetails);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <>
        {showModal && (
          <BlogUpdateModal
            onClose={handleCloseModal}
            singleBlogData={selectedBlog}
          />
        )}
      </>

      <Table>
        <TableCaption>A list of your recent blogs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Overview</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts &&
            blogPosts.map((singlePostData: TBlogData, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  {singlePostData.blog_image && (
                    <Image
                      alt={singlePostData.blog_name}
                      src={singlePostData.blog_image}
                      width={400}
                      height={400}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <p className="text-base font-medium">
                    {singlePostData.blog_name}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-blue-500 underline">
                    {singlePostData.blog_image}
                  </p>
                </TableCell>
                <TableCell>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: singlePostData.blog_description,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <button
                    onClick={() =>
                      handleShowModal(singlePostData._id as string)
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
                            onClick={() =>
                              handleDelete(singlePostData._id as string)
                            }
                            variant="destructive"
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

export default ModifyBlogs;
