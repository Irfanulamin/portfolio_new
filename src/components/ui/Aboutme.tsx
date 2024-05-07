/* eslint-disable react/no-unescaped-entities */
import Container from "@/utils/Container";
import React from "react";
import { IoCodeSlash } from "react-icons/io5";

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
            I am a{" "}
            <span className="text-amber-400 bg-black px-0 md:px-1 lg:px-1">
              20 year old Front End developer
            </span>{" "}
            , who is passionate about creating user-friendly websites and
            enhancing user experiences. I also{" "}
            <span className="text-[#ef4444] bg-[#fca5a5] px-1 font-semibold">
              Love
            </span>{" "}
            to learn new features and latest stuff of web development.
          </p>
        </div>
        <div className="p-4 flex justify-start items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div>
                <span className="text-amber-400 whitespace-nowrap p-1 text-sm md:text-base lg:text-xl pr-1 hidden md:block lg:block font-bold">
                  #
                </span>
              </div>
              <div>
                <p className="text-xs md:text-xl lg:text-2xl">
                  <span className="text-amber-400 text-3xl inline-block md:hidden lg:hidden pr-2">
                    .
                  </span>
                  I am <span className="bg-amber-400 px-1">MERN / NextJS </span>{" "}
                  Developer.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <span className="text-amber-400 whitespace-nowrap p-1 text-sm md:text-base lg:text-xl pr-1 hidden md:block lg:block font-bold">
                  #
                </span>
              </div>
              <div>
                <p className="text-xs md:text-xl lg:text-2xl">
                  <span className="text-amber-400 text-3xl inline-block md:hidden lg:hidden pr-2">
                    .
                  </span>
                  usually{" "}
                  <span className="bg-amber-400">
                    Feels Comfortable In Front-End
                  </span>
                  , But there is always a room for improvement.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <span className="text-amber-400 whitespace-nowrap p-1 text-sm md:text-base lg:text-xl pr-1 hidden md:block lg:block font-bold">
                  #
                </span>
              </div>
              <div>
                <p className="text-xs md:text-xl lg:text-2xl">
                  <span className="text-amber-400 text-3xl inline-block md:hidden lg:hidden pr-2">
                    .
                  </span>
                  I have hands-on experience with{" "}
                  <span className="bg-amber-400">
                    MongoDB, Express.js, React, Node.js, Redux, NextJS,
                    Typescript and many more.
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <span className="text-amber-400 whitespace-nowrap p-1 text-sm md:text-base lg:text-xl pr-1 hidden md:block lg:block font-bold">
                  #
                </span>
              </div>
              <div>
                <p className="text-xs md:text-xl lg:text-2xl">
                  <span className="text-amber-400 text-3xl inline-block md:hidden lg:hidden pr-2">
                    .
                  </span>
                  I like to utilize
                  <span className="px-1 bg-amber-400">
                    modern web development technologies
                  </span>
                  .
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
