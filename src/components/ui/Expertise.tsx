"use client";
import Image from "next/image";
import htmlImage from "@/asset/images/html-5.png";
import cssImage from "@/asset/images/css-3.png";
import javascriptImage from "@/asset/images/js.png";
import reactImage from "@/asset/images/react.png";
import tailwindImage from "@/asset/images/tailwind.png";
import mongoDBImage from "@/asset/images/mongoDB.png";
import firebaseImage from "@/asset/images/firebase.png";
import tsc from "@/asset/images/typescript.png";
import framerMotion from "@/asset/images/framer-motion.png";
import nextJS from "@/asset/images/next-js-logo.png";
import redux from "@/asset/images/redux.png";
import Container from "@/utils/Container";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { skillsData } from "@/utils/data/imagesData";

const Expertise = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
    });
  });
  return (
    <Container>
      <div className="flex flex-wrap justify-evenly pt-4 pb-36 my-4 gap-4">
        {skillsData.map((singleSkillData, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: 180 }}
            animate={controls}
          >
            <Image
              src={singleSkillData.imageUrl}
              alt={singleSkillData.title}
              width={200}
              height={200}
              className="w-12 h-12 object-cover hover:scale-125 smooth_transition"
            />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Expertise;
