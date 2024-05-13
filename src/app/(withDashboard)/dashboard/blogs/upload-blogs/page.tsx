"use client";
import Tiptap from "@/components/ui/Tiptap";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useCreateBlogsMutation } from "@/redux/api/blogsApi";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const UploadBlogs = () => {
  const { toast } = useToast();
  const [createBlogs] = useCreateBlogsMutation();
  const { handleSubmit, register, reset } = useForm();
  const [content, setContent] = useState<any>(null);
  const onSubmit = async (FormValues: FieldValues) => {
    const UploadingBlogData = {
      blog_name: FormValues.blog_name,
      blog_image: FormValues.blog_image,
      blog_description: content,
    };

    try {
      const response: any = await createBlogs(UploadingBlogData);
      if (response.data && response.data.acknowledged === true) {
        toast({
          title: "Your Blog has been added! 💖",
          description: "Continuously learn to continuously grow 😎",
        });

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
            type="url"
            className="m-3"
            placeholder="Image"
          />
          <label className="font-semibold ">Content</label>
          <Tiptap defaultValue={""} setContent={setContent} />
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
