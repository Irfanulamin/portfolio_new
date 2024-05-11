"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBlogsMutation } from "@/redux/api/blogsApi";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const UploadBlogs = () => {
  const [createBlogs] = useCreateBlogsMutation();
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (FormValues: FieldValues) => {
    try {
      const response: any = await createBlogs(FormValues);
      if (response.data && response.data.acknowledged === true) {
        console.log("ADDED SKILLS");
        reset();
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div className="w-full py-10 px-5">
      <div>
        <h4 className="text-xl font-bold">Create A Blog</h4>
        <p className="text-base font-medium">upload your blog in one second!</p>
      </div>
      <div className="py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold ">Title</label>
          <Input
            {...register("blog_name")}
            type="text"
            className="m-3"
            placeholder="Title"
          />
          <label className="font-semibold ">Image</label>
          <Input
            {...register("blog_image")}
            type="text"
            className="m-3"
            placeholder="Image"
          />
          <label className="font-semibold ">Content</label>
          <Textarea
            {...register("blog_description")}
            className="m-3"
            placeholder="Type your message here."
          />
          <button
            className="w-full py-2 bg-black text-white rounded hover:bg-white hover:text-black text-xl font-semibold smooth_transition "
            type="submit"
          >
            Upload !
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadBlogs;
