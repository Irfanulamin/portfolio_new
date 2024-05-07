import Link from "next/link";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import Container from "@/utils/Container";
import { RiGraduationCapFill } from "react-icons/ri";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <Container>
      <div className=" flex justify-between flex-col-reverse md:flex-row lg:flex-row gap-x-12 items-center  py-4 md:py-12 lg:py-12">
        <div className=" w-full md:w-1/2 lg:w-1/2">
          <h1 className="text-base md:text-5xl lg:text-5xl font-bold">
            Hey,
            <br /> I am your
            <span className="text-amber-600"> Front End Developer</span>.
          </h1>
          <p className=" text-xs md:text-lg lg:text-normal text-stone-700 font-medium py-1 md:py-5 lg:py-5">
            I enjoy creating attractive and user-friendly interfaces. <br />{" "}
            With a passion for design and technology, <br /> I am dedicated to
            delivering smooth and enjoyable user experiences that leave a
            positive impact.
          </p>
          <div className="bg-amber-600 flex justify-center items-center gap-1 p-2 border-l-4 rounded border-black">
            <div>
              <p className="text-xs md:text-sm lg:text-lg font-semibold  ">
                I am currently a fresher at Southeast University (CSE)
              </p>
            </div>
            <div>
              <RiGraduationCapFill className="w-6 h-6" />
            </div>
          </div>

          <div className="flex items-center py-4">
            <div className="inline-block mr-4">
              <Link
                href="/contact-me"
                className="flex justify-center items-center gap-1 text-white bg-black px-2 py-1 border hover:border-black hover:bg-transparent hover:text-black font-semibold smooth_transition "
              >
                Contact
                <FaPhoneAlt className="w-5 h-5" />
              </Link>
            </div>
            <div className="inline-block">
              <Link
                href="https://drive.google.com/u/0/uc?id=1PqC6JjcPdIc4lpr4bkkIb6aYhToWNLtT&export=download"
                download
                className="flex justify-center items-center gap-1 text-black px-2 py-1 border border-black hover:bg-black hover:text-white font-semibold smooth_transition"
              >
                Resume
                <HiOutlineFolderDownload className="w-5 h-5"></HiOutlineFolderDownload>
              </Link>
            </div>
          </div>
        </div>
        <BannerImage />
      </div>
    </Container>
  );
};

export default Banner;
