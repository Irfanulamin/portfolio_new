/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useUpdateProjectsMutation } from "@/redux/api/projectsApi";
import { useToast } from "./use-toast";

const ProjectUpdateModal = ({
  singleProjectData,
  onClose,
}: {
  singleProjectData: any;
  onClose: any;
}) => {
  const { handleSubmit, register } = useForm();
  const [updateProject] = useUpdateProjectsMutation();

  const { toast } = useToast();

  const onSubmit = async (FormData: FieldValues) => {
    try {
      const response: any = await updateProject({
        id: singleProjectData?._id,
        updatedProject: FormData,
      });
      if (response.data && response.data.acknowledged === true) {
        toast({
          title: "Your Project has been updated! 💖",
          description: "keep learning to add more skills 😎",
        });
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm ">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[1000px] p-4 max-h-[100vh] overflow-auto">
        <div className="bg-white shadow-md  rounded-2xl overflow-hidden">
          <div className="p-5 lg:p-11">
            <div>
              <div>
                <h2 className="text-xl font-semibold  text-green-600">
                  Edit Your Project !
                </h2>
                <p className=" text-base ">
                  Make changes to your project here. Click save when you're
                  done.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">
                  <div>
                    <Label htmlFor="name" className="text-right">
                      Title
                    </Label>
                    <Input
                      {...register("project_name")}
                      id="name"
                      className="text-base font-semibold"
                      defaultValue={singleProjectData.project_name}
                    />
                  </div>
                  <div>
                    <Label className="text-right">Image Link</Label>
                    <Input
                      {...register("project_image")}
                      type="url"
                      className="text-blue-600 underline"
                      defaultValue={singleProjectData.project_image}
                    />
                  </div>
                  <div>
                    <Label className="text-right">Github Link</Label>
                    <Input
                      {...register("github_link")}
                      className="font-medium"
                      defaultValue={singleProjectData.github_link}
                    />
                  </div>
                  <div>
                    <Label className="text-right">Deploy Link</Label>
                    <Input
                      {...register("deploy_link")}
                      className="font-medium"
                      defaultValue={singleProjectData.deploy_link}
                    />
                  </div>
                  <div>
                    <Label className="text-right">Features</Label>
                    {singleProjectData.features &&
                      singleProjectData.features.map(
                        (featureContent: any, index: any) => (
                          <Input
                            {...register(`features.${index}`)}
                            key={index}
                            className="mb-1 text-green-700 font-normal border-2 border-black focus:border-0"
                            defaultValue={featureContent}
                          />
                        )
                      )}
                  </div>
                  <div className="">
                    <Label className="text-right">Content</Label>
                    <Textarea
                      id="content"
                      {...register("project_description")}
                      className=" w-full"
                      defaultValue={singleProjectData.project_description}
                      placeholder="Type your message here."
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

export default ProjectUpdateModal;
