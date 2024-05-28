"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateProjectsMutation } from "@/redux/api/projectsApi";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const UploadProjectsPage = () => {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [processFeature, setProcessFeature] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);
  const { register, handleSubmit, reset } = useForm();
  const [createProjects] = useCreateProjectsMutation();

  const addFeature = () => {
    if (processFeature) {
      setFeatures([...features, processFeature]);
    }
    if (inputRef.current) {
      inputRef.current.value = ""; // Reset the input value to empty string
    }
  };

  const cancelFeature = (featureToRemove: string) => {
    const updatedFeatures = features.filter(
      (feature) => feature !== featureToRemove
    );
    setFeatures(updatedFeatures);
  };

  const onSubmit = async (FormValues: FieldValues) => {
    try {
      const createdProjectData = {
        project_name: FormValues.project_name,
        project_image: FormValues.project_image,
        project_description: FormValues.project_description,
        github_link: FormValues.github_link,
        deploy_link: FormValues.deploy_link,
        features: features,
      };
      const response: any = await createProjects(createdProjectData);
      console.log(response);
      if (response.data && response.data.acknowledged === true) {
        setFeatures([]);
        reset();
        toast({
          title: "Your Project has been added! 💖",
          description: "Create projects to innovate and elevate 😎",
        });
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="w-full py-10 px-5">
      <div>
        <h4 className="text-xl font-bold">Add A Project</h4>
        <p className="text-base font-medium">
          upload your project in one second!
        </p>
      </div>
      <div className="py-6 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-semibold ">Title</label>
          <Input
            required
            type="text"
            {...register("project_name")}
            className="m-3 border border-slate-300"
            placeholder="Title"
          />
          <label className="font-semibold ">Image</label>
          <Input
            required
            type="url"
            {...register("project_image")}
            className="m-3 border border-slate-300"
            placeholder="Image"
          />
          <label className="font-semibold ">Github Link</label>
          <Input
            required
            type="text"
            {...register("github_link")}
            className="m-3 border border-slate-300"
            placeholder="Github Link"
          />
          <label className="font-semibold ">Deploy Link</label>
          <Input
            required
            type="text"
            {...register("deploy_link")}
            className="m-3 border border-slate-300"
            placeholder="Deploy Link"
          />
          <label className="font-semibold ">Content</label>
          <Textarea
            required
            className="m-3 border border-slate-300"
            placeholder="Type your message here."
            {...register("project_description")}
          />
          <div className="flex items-center py-3 justify-start w-full md:w-2/4 lg:w-1/4">
            <label className="font-semibold mr-3">Features</label>
            <Input
              ref={inputRef}
              type="text"
              placeholder="Feature"
              onBlur={(e) => setProcessFeature(e.target.value)}
            />
            <button
              type="button"
              onClick={() => addFeature()}
              className="p-3 bg-black text-white font-normal rounded-r-xl -ml-2"
            >
              Add
            </button>
          </div>

          <div className="pb-1 flex justify-start flex-wrap items-center gap-2">
            {features.length > 0 &&
              features.map((featureData) => (
                <div
                  key={featureData}
                  className="flex justify-center items-center gap-2 bg-black/20 p-2 rounded-md"
                >
                  <div>
                    <p>{featureData}</p>
                  </div>
                  <div onClick={() => cancelFeature(featureData)}>
                    <ImCancelCircle />
                  </div>
                </div>
              ))}
          </div>
          {features.length < 3 && (
            <p className="pb-3">
              Add {3 - features.length} more{" "}
              {features.length === 2 ? "feature" : "features"} in your project.
            </p>
          )}
          <Button type="submit" variant="primary" size="xl">
            Upload !
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UploadProjectsPage;
