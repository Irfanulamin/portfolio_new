import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { FaTools } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdSettings, MdWebStories } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { RiFileTextFill } from "react-icons/ri";
import Link from "next/link";

const DashboardBar = () => {
  return (
    <div className="flex justify-between items-center py-7">
      <div>
        <Link href="/dashboard">
          <h1 className="text-xl  lg:text-3xl font-extrabold  text-white">
            Dashboard
          </h1>
        </Link>
      </div>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <p className="text-base font-medium ">Skills</p>
                </div>
                <div>
                  <FaTools />
                </div>
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <Link href="/dashboard/skills/upload-skills">
                <MenubarItem className="text-sm font-medium">
                  Upload Skills <IoCloudUploadSharp className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
              <Link href="/dashboard/skills/modify-skills">
                <MenubarItem className="text-sm font-medium">
                  Modify/Delete Skills <MdSettings className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <p className="text-base font-medium ">Projects</p>
                </div>
                <div>
                  <MdWebStories />
                </div>
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <Link href="/dashboard/projects/upload-projects">
                <MenubarItem className="text-sm font-medium">
                  Upload projects <IoCloudUploadSharp className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
              <Link href="/dashboard/projects/modify-projects">
                <MenubarItem className="text-sm font-medium">
                  Modify/Delete projects <MdSettings className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <p className="text-base font-medium ">Blogs</p>
                </div>
                <div>
                  <RiFileTextFill />
                </div>
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <Link href="/dashboard/blogs/upload-blogs">
                <MenubarItem className="text-sm font-medium">
                  Upload Blogs <IoCloudUploadSharp className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
              <Link href="/dashboard/blogs/modify-blogs">
                <MenubarItem className="text-sm font-medium">
                  Modify/Delete Blogs <MdSettings className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <p className="text-base font-medium ">Experience</p>
                </div>
                <div>
                  <PiBagFill />
                </div>
              </div>
            </MenubarTrigger>
            <MenubarContent>
              <Link href="/dashboard/experience/upload-exp">
                <MenubarItem className="text-sm font-medium">
                  Upload Experience{" "}
                  <IoCloudUploadSharp className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
              <Link href="/dashboard/experience/modify-exp">
                <MenubarItem className="text-sm font-medium">
                  Modify/Delete Experience{" "}
                  <MdSettings className="m-2 h-4 w-4" />
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default DashboardBar;
