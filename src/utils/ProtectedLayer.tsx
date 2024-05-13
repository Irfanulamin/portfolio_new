"use client";
import { userCurrentToken } from "@/redux/feature/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const ProtectedLayer = ({ children }: { children: any }) => {
  const token = useAppSelector(userCurrentToken);
  const router = useRouter();

  if (!token) {
    return router.push("/authenticate");
  }

  return children;
};

export default ProtectedLayer;
