"use client";

import Image from "next/image";

import Logo from "@/assets/logo.svg";

import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import thread from "@/assets/threads.svg";
import whatsapp from "@/assets/whatsapp.svg";
import x from "@/assets/x.png";

import facebook_white from "@/assets/facebook_white.png";
import instagram_white from "@/assets/instagram_white.png";
import linkedin_white from "@/assets/linkedin_white.png";
import thread_white from "@/assets/threads_white.svg";
import whatsapp_white from "@/assets/whatsapp_white.svg";
import x_white from "@/assets/x_white.svg";

import SpecialButton from "@/components/SpecialButton";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-fit min-w-screen w-fit space-y-10">

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="relative w-55 h-55">
        <Image src={Logo} alt="Logo" fill className=" object-contain" />
      </div>

      <div className="text-center space-y-5 mx-10">
        <h1 className="text-4xl font-semibold">Hello world! I am Aditya Banka.</h1>
        <h2 className="text-xl md:px-20 not-md:text-justify font-thin">I am a software engineer and a web developer. I love to build things and learn new things. I am passionate about technology and I am always looking for new challenges to solve. </h2>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 transition duration-100" >

        <SpecialButton
          onClick={() => window.open("https://www.facebook.com/adityabanka", "_blank")}
          logoName="Facebook"
          primaryLogo={facebook}
          secondaryLogo={facebook_white}
          backgroundColor="#0866ff"
        />

        <SpecialButton
          onClick={() => window.open("https://www.instagram.com/adityabanka", "_blank")}
          logoName="Instagram"
          primaryLogo={instagram}
          secondaryLogo={instagram_white}
          backgroundColor="#ec4899" // pink-600
        />

        <SpecialButton
          onClick={() => window.open("https://www.linkedin.com/in/adityabanka", "_blank")}
          logoName="LinkedIn"
          primaryLogo={linkedin}
          secondaryLogo={linkedin_white}
          backgroundColor="#0b65c3"
        />

        <SpecialButton
          onClick={() => window.open("https://www.threads.net/adityabanka", "_blank")}
          logoName="Threads"
          primaryLogo={thread}
          secondaryLogo={thread_white}
          backgroundColor="#000000"
        />

        <SpecialButton
          onClick={() => window.open("https://wa.me/918586098888", "_blank")}
          logoName="Whatsapp"
          primaryLogo={whatsapp}
          secondaryLogo={whatsapp_white}
          backgroundColor="#25d366"
        />

        <SpecialButton
          onClick={() => window.open("https://x.com/adityabanka", "_blank")}
          logoName="X.com"
          primaryLogo={x}
          secondaryLogo={x_white}
          backgroundColor="#000000"
        />

      </div>

      <div>
        <h1 className="text-xs">Made by <a href="https://adityabanka.com" target="_blank" rel="noreferrer">@AdityaBanka</a></h1>
      </div>

    </div>
  );
}
