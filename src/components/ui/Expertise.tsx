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
      <div className="flex flex-wrap justify-evenly py-4 my-4 gap-4">
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            src={htmlImage}
            alt="html-image"
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition"
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt=""
            src={cssImage}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition"
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="js-img"
            src={javascriptImage}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition"
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt=""
            src={reactImage}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition"
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="tw-img"
            src={tailwindImage}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition "
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="mongodb-img"
            src={mongoDBImage}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition "
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="firebase-img"
            src={firebaseImage}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition "
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="tsc-img"
            src={tsc}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition "
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="nextjs-img"
            src={nextJS}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition "
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="redux-img"
            src={redux}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition "
          />
        </motion.div>
        <motion.div initial={{ scale: 0, rotate: 180 }} animate={controls}>
          <Image
            alt="framer-motion-jpg"
            src={framerMotion}
            className="w-12 h-12 object-cover hover:scale-125 smooth_transition"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Expertise;
