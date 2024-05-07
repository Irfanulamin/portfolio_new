"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLaptopCode, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex flex-row justify-between items-center py-5 md:py-10 lg:py-10">
      <div>
        <Link href="/">
          <h2 className="text-xl md:text-4xl lg:text-4xl font-extrabold">
            Irfanul Am<span className="text-amber-600">in</span>
          </h2>
        </Link>
      </div>
      <div className="md:hidden lg:hidden">
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        >
          {isOpen ? (
            <RxCross2 className="w-6 h-6 text-black" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6 text-black" />
          )}
        </button>
      </div>
      <div
        className={`md:flex lg:flex hidden justify-center items-center ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row lg:flex-row gap-3 justify-center items-center gap-x-7">
          <li>
            <Link
              href="/aboutme"
              className="font-semibold px-2 text-sm lg:text-base"
            >
              <div className="flex justify-center items-center gap-1.5">
                <div>About me</div>
                <div>
                  <IoPerson className="text-amber-600" />
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
                <div>My Projects</div>
                <div>
                  <FaLaptopCode className="text-amber-600" />
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
                <div>Contact me</div>
                <div>
                  <FaPhoneAlt className="text-amber-600" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden lg:hidden absolute top-14 right-4 bg-white shadow-md rounded-md border-black/80 border-2 p-2 w-44 z-10">
          <ul>
            <li>
              <Link
                href="/aboutme"
                className="font-semibold px-0.5 text-sm lg:text-base"
              >
                <div className="flex justify-center items-center gap-1.5">
                  <div>About me</div>
                  <div>
                    <IoPerson className="text-amber-600" />
                  </div>
                </div>
              </Link>
            </li>
            <hr className="border-black" />
            <li>
              <Link
                href="/my-projects"
                className="font-semibold px-0.5 text-sm lg:text-base"
              >
                <div className="flex justify-center items-center gap-1.5">
                  <div>My Projects</div>
                  <div>
                    <FaLaptopCode className="text-amber-600" />
                  </div>
                </div>
              </Link>
            </li>
            <hr className="border-black" />
            <li>
              <Link
                href="/contact-me"
                className="font-semibold px-0.5 text-sm lg:text-base"
              >
                <div className="flex justify-center items-center gap-1.5">
                  <div>Contact me</div>
                  <div>
                    <FaPhoneAlt className="text-amber-600" />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
