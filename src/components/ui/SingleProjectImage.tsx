"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SingleProjectImage = ({ image }: { image: string }) => {
  const boxRef = useRef(null);

  const boxInView = useInView(boxRef);
  return (
    <motion.div
      ref={boxRef}
      animate={boxInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
    >
      <div>
        <Image
          src={image}
          width={800}
          height={800}
          alt=""
          className="border-2 border-black  md:h-[36rem]  min-w-full h-[14rem] lg:w-[36rem] lg:h-[20rem] blur-0 hover:blur-sm object-cover object-top hover:object-bottom delay_transition"
        />
      </div>
    </motion.div>
  );
};

export default SingleProjectImage;
