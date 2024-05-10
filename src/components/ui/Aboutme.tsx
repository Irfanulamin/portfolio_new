/* eslint-disable react/no-unescaped-entities */
import Container from "@/utils/Container";
import React from "react";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";

const Aboutme = () => {
  return (
    <Container>
      <div className="pt-24 pb-36">
        <div className="w-full flex justify-center items-center">
          <div className="m-2 md:m-6 lg:m-12 bg-black p-2  flex gap-1.5 njustify-center items-center ">
            <div>
              <p className="text-white text-3xl md:text-5xl lg:text-5xl inline-block  font-semibold ">
                About Me
              </p>
            </div>
            <div>
              <IoCodeSlash className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm md:text-xl lg:text-2xl py-1 md:py-5 lg:py-12 ">
            - I am a 20 year old Front End developer , who is passionate about
            creating user-friendly websites and enhancing user experiences. I
            also Love to learn new features and latest stuff of web development.
          </p>
        </div>
        <div className="p-4 flex justify-start items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <FaLaptopCode className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-xs md:text-xl lg:text-2xl">
                  I am MERN / NextJS Developer.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <div>
                <RiGraduationCapFill className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-xs md:text-xl lg:text-2xl">
                  I am currently a fresher at Southeast University (CSE)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaTools className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-xs md:text-xl lg:text-2xl">
                  I like to utilize modern web development technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Aboutme;
