"use client"
import NewsletterForm from "@/app/componets/NewsletterForm";
import KDMColorWhite from "../public/KDMcolorWhite.png"
import Image from "next/image";
import { useState } from "react";
import Socials from "./componets/Socials";
import EasternEgg from "./componets/EasternEgg";
import egg from "../public/egg.png"
import crackedEgg from "../public/crackedEgg.png"

export default function Home() {
  const [isEggCracked, setIsEggCracked] = useState(false)
  const openEgg = () => {
    setIsEggCracked(!isEggCracked)
  }
  return (
    <main className="bg-[#03040B] flex items-center flex-col justify-center p-10  min-h-screen">
      <div className="space-y-1">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000  bg-gradient-to-t from-blue-500 to-red-500 cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text ">
          Come Join the Family{"!"}
        </h2>
      </div>
      <div className=" relative h-56 w-56 sm:w-72 sm:h-72 flex items-center justify-center duration-1000 text-stroke animate-title">
          <Image
            src={KDMColorWhite}
            alt="LogoImage"
          />
      </div>
      <NewsletterForm />
      <Socials />
      <EasternEgg isEggCracked={isEggCracked} egg={egg} crackedEgg={crackedEgg} openEgg={openEgg} padding="pt-2 sm:pt-0 " />
    </main>
  );
}
