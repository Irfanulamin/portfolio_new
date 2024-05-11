/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useUpdateSkillsMutation } from "@/redux/api/skillsApi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Modal = ({
  singleSkillData,
  onClose,
}: {
  singleSkillData: any;
  onClose: any;
}) => {
  const { handleSubmit, register } = useForm();

  const [updateSkillsData] = useUpdateSkillsMutation();

  const onSubmit = async (FormData: FieldValues) => {
    console.log(FormData);
    try {
      const updatedSkillData = {
        title: FormData?.title,
        imageUrl: FormData?.imageUrl,
      };
      const { data }: any = await updateSkillsData({
        id: FormData?._id,
        updatedSkills: updatedSkillData,
      });
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
                  Edit Your Skill !
                </h2>
                <p className=" text-base ">
                  Make changes to your skill here. Click save when you're done.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">
                  <div>
                    <Input
                      id="_id"
                      {...register("_id")}
                      defaultValue={singleSkillData._id}
                      readOnly
                      className="bg-slate-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="title"
                      {...register("title")}
                      defaultValue={singleSkillData.title}
                      className="text-lg font-semibold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="username" className="text-right">
                      Image Link
                    </Label>
                    <Input
                      id="imageUrl"
                      className=" text-base text-blue-500 underline"
                      {...register("imageUrl")}
                      defaultValue={singleSkillData.imageUrl}
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

export default Modal;
