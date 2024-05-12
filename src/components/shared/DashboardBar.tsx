"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaTools } from "react-icons/fa";
import { IoCloudUploadSharp, IoMenu } from "react-icons/io5";
import { MdSettings, MdWebStories } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { RiFileTextFill } from "react-icons/ri";
import Link from "next/link";
import { logOut } from "@/redux/feature/authSlice";
import { useAppDispatch } from "@/redux/hook";

const DashboardBar = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between flex-wrap items-center py-7">
      <div>
        <Link href="/dashboard">
          <h1 className="text-xl  lg:text-3xl font-extrabold  text-white">
            Dashboard
          </h1>
        </Link>
      </div>
      <div className="hidden md:block lg:block">
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
          <MenubarMenu>
            <div>
              <Button
                onClick={() => dispatch(logOut())}
                size="sm"
                variant="destructive"
              >
                Logout
              </Button>
            </div>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="block md:hidden lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoMenu className="w-6 h-6 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              <div className="flex  items-center gap-2 bg-black p-1">
                <div>
                  <p className="text-base font-medium text-white">Skills</p>
                </div>
                <div>
                  <FaTools className="text-white" />
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuGroup>
              <Link href="/dashboard/skills/upload-skills">
                <DropdownMenuItem className="text-sm font-medium">
                  Upload Skills
                </DropdownMenuItem>
              </Link>
              <Link href="/dashboard/skills/modify-skills">
                <DropdownMenuItem className="text-sm font-medium">
                  Modify/Delete Skills
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className="flex  items-center gap-2 bg-black p-1">
                <div>
                  <p className="text-base font-medium text-white">Projects</p>
                </div>
                <div>
                  <MdWebStories className="text-white" />
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuGroup>
              <Link href="/dashboard/projects/upload-projects">
                <DropdownMenuItem className="text-sm font-medium">
                  Upload Projects
                </DropdownMenuItem>
              </Link>
              <Link href="/dashboard/projects/modify-projects">
                <DropdownMenuItem className="text-sm font-medium">
                  Modify/Delete Projects
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className="flex  items-center gap-2 bg-black p-1">
                <div>
                  <p className="text-base font-medium text-white">Blogs</p>
                </div>
                <div>
                  <RiFileTextFill className="text-white" />
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuGroup>
              <Link href="/dashboard/blogs/upload-blogs">
                <DropdownMenuItem className="text-sm font-medium">
                  Upload Blogs
                </DropdownMenuItem>
              </Link>
              <Link href="/dashboard/blogs/modify-blogs">
                <DropdownMenuItem className="text-sm font-medium">
                  Modify/Delete Blogs
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className="flex  items-center gap-2 bg-black p-1 ">
                <div>
                  <p className="text-base font-medium text-white">Experience</p>
                </div>
                <div>
                  <PiBagFill className="text-white" />
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <Link href="/dashboard/experience/upload-exp">
                <DropdownMenuItem className="text-sm font-medium">
                  Upload Experience
                </DropdownMenuItem>
              </Link>
              <Link href="/dashboard/experience/modify-exp">
                <DropdownMenuItem className="text-sm font-medium">
                  Modify/Delete Experience
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div>
                <Button
                  onClick={() => dispatch(logOut())}
                  size="sm"
                  variant="destructive"
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DashboardBar;
