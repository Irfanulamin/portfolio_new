"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FieldValues, useForm } from "react-hook-form";

const UploadProjectsPage = () => {
  const [processFeature, setProcessFeature] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);
  const { register, handleSubmit } = useForm();

  const addFeature = () => {
    if (processFeature) {
      setFeatures([...features, processFeature]);
    }
  };
  const cancelFeature = (featureToRemove: string) => {
    const updatedFeatures = features.filter(
      (feature) => feature !== featureToRemove
    );
    setFeatures(updatedFeatures);
  };

  const onSubmit = (eventData: FieldValues) => {
    console.log(eventData.title);
    console.log(eventData.image);
    console.log(eventData.github_link);
    console.log(eventData.deploy_link);
    console.log(eventData.content);
    console.log(features);
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
            type="text"
            {...register("title")}
            className="m-3 border border-slate-300"
            placeholder="Title"
          />
          <label className="font-semibold ">Image</label>
          <Input
            type="text"
            {...register("image")}
            className="m-3 border border-slate-300"
            placeholder="Image"
          />
          <label className="font-semibold ">Github Link</label>
          <Input
            type="text"
            {...register("github_link")}
            className="m-3 border border-slate-300"
            placeholder="Github Link"
          />
          <label className="font-semibold ">Deploy Link</label>
          <Input
            type="text"
            {...register("deploy_link")}
            className="m-3 border border-slate-300"
            placeholder="Deploy Link"
          />
          <label className="font-semibold ">Content</label>
          <Textarea
            className="m-3 border border-slate-300"
            placeholder="Type your message here."
            {...register("content")}
          />
          <div className="flex items-center py-3 justify-start w-full md:w-2/4 lg:w-1/4">
            <label className="font-semibold mr-3">Features</label>
            <Input
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
          <div className="pb-8 flex justify-start flex-wrap items-center gap-2">
            {features.length > 0 &&
              features.map((featureData) => (
                <div
                  key={featureData}
                  className="flex justify-center items-center gap-2 bg-black/20 p-2"
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
          <button
            className="w-full py-2 bg-black text-white rounded hover:bg-white hover:text-black text-xl font-semibold smooth_transition mx-auto"
            type="submit"
          >
            Upload !
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProjectsPage;
