/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useUpdateBlogsMutation } from "@/redux/api/blogsApi";
import Tiptap from "./Tiptap";

const BlogUpdateModal = ({
  singleBlogData,
  onClose,
}: {
  singleBlogData: any;
  onClose: any;
}) => {
  const { handleSubmit, register } = useForm();

  const [updateBlogsData] = useUpdateBlogsMutation();

  const [content, setContent] = useState<any>(null);

  const onSubmit = async (FormData: any) => {
    console.log(FormData);
    try {
      const updatedBlogData: any = {
        blog_name: FormData?.blog_name,
        blog_image: FormData?.blog_image,
        blog_description: content ? content : singleBlogData.blog_description,
      };
      if (content.trim() !== "") {
        updatedBlogData.blog_description = content;
      }
      const res: any = await updateBlogsData({
        id: FormData?._id,
        updatedBlogs: updatedBlogData,
      });
      console.log(res);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md  rounded-2xl overflow-hidden">
          <div className="p-5 lg:p-11">
            <div>
              <div>
                <h2 className="text-xl font-semibold  text-green-600">
                  Edit Your blog !
                </h2>
                <p className=" text-base ">
                  Make changes to your blog here. Click save when you're done.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">
                  <div>
                    <Input
                      id="_id"
                      {...register("_id")}
                      defaultValue={singleBlogData._id}
                      readOnly
                      className="bg-slate-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="blog_name"
                      {...register("blog_name")}
                      defaultValue={singleBlogData.blog_name}
                      className="text-lg font-semibold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="username" className="text-right">
                      Image
                    </Label>
                    <Input
                      id="blog_image"
                      className=" text-base text-blue-500 underline"
                      {...register("blog_image")}
                      defaultValue={singleBlogData.blog_image}
                    />
                  </div>
                  <div>
                    <label className="font-semibold ">Content</label>
                    <Tiptap
                      setContent={setContent}
                      defaultValue={singleBlogData.blog_description}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end items-center gap-2">
                  <div>
                    <Button type="submit">Save changes</Button>
                  </div>
                  <div>
                    <a onClick={onClose} className="">
                      Close The Modal
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdateModal;
