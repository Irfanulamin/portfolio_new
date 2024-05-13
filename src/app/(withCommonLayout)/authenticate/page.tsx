"use client";
import Container from "@/utils/Container";
import React from "react";
import LoginJPG from "@/asset/login.jpg";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { useLoginUserMutation } from "@/redux/api/LoginApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/feature/authSlice";

const AuthnticatePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [login] = useLoginUserMutation();
  const { handleSubmit, register } = useForm();
  const onSubmit = async (formData: FieldValues) => {
    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };
      const response: any = await login(loginData);
      if (response.data && response.data.success) {
        router.push("/dashboard");
        dispatch(
          setUser({ email: formData.email, token: response.data.token })
        );
        console.log("User Login successfully");
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <Container>
      <div className="min-h-[80vh] h-full flex flex-col lg:flex-row justify-center items-center gap-10 p-6 lg:p-12">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <Image src={LoginJPG} alt="login-img" width={800} height={800} />
        </div>
        <div className="w-full  lg:w-1/2 border-2 rounded-md p-8">
          <div>
            <h2 className="text-left text-3xl  lg:text-5xl font-semibold  text-[#a80000]">
              Authenticate!
            </h2>
            <p className=" text-sm  py-2 lg:py-4 text-left ">
              For Authorized Member Only.{" "}
              <span className="inline-block">
                <FaLock />
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col w-full">
                <label className="text-left text-black font-semibold text-lg">
                  Email
                </label>
                <input
                  className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="email"
                  {...register("email")}
                  id="email"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-left text-black font-semibold text-lg">
                  Password
                </label>
                <input
                  className="focus:outline-[#a80000] text-[#a80000] font-semibold rounded-md p-2 border-2 border-black"
                  placeholder="password"
                  {...register("password")}
                  id="password"
                />
              </div>
            </div>

            <div className=" py-6">
              <button
                type="submit"
                className=" w-full rounded-sm border-none hover:bg-white bg-[#a80000] hover:text-[#a80000] border-white font-semibold  text-white py-3 smooth_transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AuthnticatePage;
