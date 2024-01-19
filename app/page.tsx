"use client"
import NewsletterForm from "@/app/componets/NewsletterForm";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import KDMColorWhite from "../public/KDMcolorWhite.png"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
   const [input, setInput] = useState("");
   const [active, setActive] = useState(true);
  return (
    <main className="bg-[#03040B] flex items-center flex-col justify-center p-10 min-h-screen">
      <div className="space-y-1">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000  bg-gradient-to-t from-blue-500 to-red-500 cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text ">
          Join the waitlist for
        </h2>
      </div>
      <div className=" relative w-96 h-72 flex items-center justify-center duration-1000 text-stroke animate-title">
          <Image
            src={KDMColorWhite}
            alt="LogoImage"
            // layout="fill"
            // objectFit="contain"
            className="bg-clip-content absolute"
          />
      </div>
      <NewsletterForm />

      {/* <Socials/> */}
    </main>
  );
}
