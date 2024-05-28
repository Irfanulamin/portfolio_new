import Link from "next/link";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { FaGithub, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import Container from "@/utils/Container";
import BannerImage from "./BannerImage";
import { Button } from "@/components/ui/button";

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
            I enjoy creating attractive and user-friendly interfaces. With a
            passion for design and technology, I am dedicated to delivering
            smooth and enjoyable user experiences that leave a positive impact.
          </p>
          <div className="flex justify-start items-center gap-2">
            <div>
              <Link href="https://github.com/Irfanulamin">
                <FaGithub className="w-12 h-12 text-black hover:text-amber-600 smooth_transition" />
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/irfanul-amin/">
                <FaLinkedin className="w-12 h-12 text-blue-500 hover:text-amber-600 smooth_transition" />
              </Link>
            </div>
          </div>

          <div className="flex items-center pt-8 pb-4">
            <div className="inline-block mr-4">
              <Link href="/contact-me">
                <Button variant="primary">
                  <div className="flex justify-center items-center gap-1 ">
                    Contact
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                </Button>
              </Link>
            </div>
            <div className="inline-block">
              <Link
                href="https://drive.google.com/u/0/uc?id=1PqC6JjcPdIc4lpr4bkkIb6aYhToWNLtT&export=download"
                download
                className="flex justify-center items-center gap-1 "
              >
                <Button variant="secondary">
                  <div className="flex justify-center items-center gap-1 ">
                    Resume
                    <HiOutlineFolderDownload className="w-5 h-5" />
                  </div>
                </Button>
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
