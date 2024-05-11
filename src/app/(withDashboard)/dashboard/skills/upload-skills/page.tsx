"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateSkillsMutation } from "@/redux/api/skillsApi";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const UploadSkillsPage = () => {
  const [createSkills] = useCreateSkillsMutation();
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = async (FormValues: FieldValues) => {
    try {
      const response: any = await createSkills(FormValues);
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
        <h4 className="text-xl font-bold">Add A Skill</h4>
        <p className="text-base font-medium">add your skill in one second!</p>
      </div>
      <div className="py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold ">Title</label>
          <Input
            {...register("title")}
            type="text"
            className="m-3"
            placeholder="Title"
            required
          />
          <label className="font-semibold ">Image</label>
          <Input
            {...register("image")}
            type="url"
            className="m-3"
            placeholder="Image"
            required
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

export default UploadSkillsPage;
