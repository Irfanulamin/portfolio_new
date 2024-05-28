"use client";
import { Input } from "@/components/ui/input";
import { useCreateSkillsMutation } from "@/redux/api/skillsApi";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const UploadSkillsPage = () => {
  const { toast } = useToast();
  const [createSkills] = useCreateSkillsMutation();
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = async (FormValues: FieldValues) => {
    try {
      const response: any = await createSkills(FormValues);
      if (response.data && response.data.acknowledged === true) {
        reset();
        toast({
          title: "Your Skill has been added! 💖",
          description: "keep learning to add more skills 😎",
        });
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
            {...register("imageUrl")}
            type="url"
            className="m-3"
            placeholder="Image"
            required
          />
          <Button type="submit" variant="primary" size="xl">
            Upload !
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UploadSkillsPage;
