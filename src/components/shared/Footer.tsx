import Link from "next/link";
import React from "react";
import { FaLaptopCode, FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black py-12 px-2 md:px-12 lg:px-24 mt-6">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start pb-1 gap-2 md:gap-4 lg:gap-10">
        <div className="flex justify-center items-center">
          <Link href="/">
            <h1 className="text-2xl tracking-widest lg:text-4xl px-1 font-bold  text-white">
              Irfanul Amin
            </h1>
          </Link>
        </div>
      </div>

      <div className="flex justify-end items-end  ">
        <ul className="flex flex-wrap gap-3 justify-center items-end ">
          <li>
            <Link
              href="/aboutme"
              className="font-semibold px-2 text-sm lg:text-base"
            >
              <div className="flex justify-center items-center gap-1.5">
                <div className="text-white">About me</div>
                <div>
                  <IoPerson className="text-white" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/my-projects"
              className="font-semibold px-2 text-sm lg:text-base"
            >
              <div className="flex justify-center items-center gap-1.5">
                <div className="text-white">My Projects</div>
                <div>
                  <FaLaptopCode className="text-white" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/contact-me"
              className="font-semibold px-2 text-sm lg:text-base"
            >
              <div className="flex justify-center items-center gap-1.5">
                <div className="text-white">Contact me</div>
                <div>
                  <FaPhoneAlt className="text-white" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-wrap justify-end gap-1 md:gap-2 lg:gap-4 mt-1">
        <p className="text-white text-sm">
          +880 188827563064
          <span className="inline-block">
            <PiPhoneCallBold className="text-white w-4 h-4" />
          </span>
        </p>
        <p className="text-white text-sm">
          irfanulamin07@gmail.com{" "}
          <span className="inline-block -mb-1">
            <MdMarkEmailRead className="text-white w-4 h-4" />
          </span>
        </p>
        <p className="text-white text-sm">
          irfanulamin10@gmail.com{" "}
          <span className="inline-block -mb-1">
            <MdMarkEmailRead className="text-white w-4 h-4" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
