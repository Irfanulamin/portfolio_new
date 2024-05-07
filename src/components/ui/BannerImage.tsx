"use client";
import Image from "next/image";
import React, { useRef } from "react";
import LogoImage from "../../../src/asset/logo.jpg";
import { useInView, motion } from "framer-motion";

const BannerImage = () => {
  const boxRef = useRef(null);

  const boxInView = useInView(boxRef);
  return (
    <motion.div
      ref={boxRef}
      animate={boxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      className="  w-full md:w-1/2 lg:w-1/2 flex justify-center items-center"
    >
      <Image
        src={LogoImage}
        alt="logo"
        className="h-64 w-64 object-cover lg:h-[30rem] lg:w-[30rem] border-4 border-black "
      />
    </motion.div>
  );
};

export default BannerImage;
