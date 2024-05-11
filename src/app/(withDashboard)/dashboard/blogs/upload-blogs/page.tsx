"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const UploadBlogs = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (FormValues: FieldValues) => {
    console.log(FormValues);
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
            {...register("title")}
            type="text"
            className="m-3"
            placeholder="Title"
          />
          <label className="font-semibold ">Image</label>
          <Input
            {...register("image")}
            type="text"
            className="m-3"
            placeholder="Image"
          />
          <label className="font-semibold ">Content</label>
          <Textarea
            {...register("content")}
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
