"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { LegacyRef, RefObject, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

import emailjs from "@emailjs/browser";
import Container from "@/utils/Container";
import Image from "next/image";
import { MdAttachEmail } from "react-icons/md";

const Contactme: React.FC = () => {
  const { toast } = useToast();
  const form: LegacyRef<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_aypg3ut", "template_nmhxkmp", form.current as any, {
        publicKey: "lvOjjTSsd9K5e5GzF",
      })
      .then(
        () => {
          toast({
            title: "Your Email Has been sent 😎",
            description: "Developer will contact you asap .",
          });
        },
        (error) => {}
      );
  };
  return (
    <Container>
      <div className="my-24">
        <div className="flex justify-start items-center gap-1">
          <div className="m-2 md:m-6 lg:m-12 bg-amber-600 p-2  flex gap-1.5 justify-center items-center ">
            <div>
              <p className="text-white text-3xl md:text-5xl lg:text-5xl  font-semibold ">
                Contact Me
              </p>
            </div>
            <div>
              <MdAttachEmail className="w-12 h-12 text-amber-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex justify-evenly items-center">
            <div>
              <Image
                src="https://i.ibb.co/SPthR9m/5579058.jpg"
                alt="form-image"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-full border-2 border-black/50 rounded p-8 p lg:w-7/12 px-20">
            <p>"What are you waiting for ? Get in touch now."</p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="py-2">
                <label className="text-sm md:text-lg lg:text-lg font-semibold ">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="mt-1 w-full p-2 text-black border border-gray-400 rounded resize-none focus:outline-none focus:border-black text-xs md:text-lg lg:text-lg"
                />
              </div>
              <div className="py-2">
                <label className="text-sm md:text-lg lg:text-lg font-semibold text-black ">
                  E-mail
                </label>
                <input
                  type="text"
                  name="from_email"
                  required
                  placeholder="Your email"
                  className="mt-1 w-full p-2 text-black border border-gray-400 rounded resize-none focus:outline-none focus:border-black text-xs md:text-lg lg:text-lg"
                />
              </div>
              <label className="text-sm md:text-lg lg:text-lg font-semibold text-black ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="mt-1 w-full p-2 text-black border border-gray-400 rounded resize-none focus:outline-none focus:border-black text-xs md:text-lg lg:text-lg"
                required
              ></textarea>
              <input
                type="submit"
                value="Send"
                className="w-full text-center py-2 bg-amber-600 rounded my-2 font-semibold tracking-wide hover:bg-black hover:text-amber-600 smooth_transition"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contactme;