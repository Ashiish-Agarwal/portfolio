"use client";

import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextLoop } from "./ui/textloop";
import { TextShimmer } from "./ui/text-shimmer";
import { TextMorph } from "./ui/text-morph";

import { FaArrowRight } from "react-icons/fa6";
import {CursorEffect} from "./CursorEffect";
import { MoveDown } from "lucide-react";
import { Grid } from "./grid";
const Hero = () => {
  const words = "Crafting User-Centric Web Experiences";
  const [text, setText] = useState("Continue");

  return (
    <div className="pb-20 pt-36 relative   ">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh]  w-[50vw] "
        fill="purple"
      />
      <Spotlight className="top-28 left-80  h-[80vh] w-[50vw] " fill="blue" />

      <div className="  h-[50rem] w-full dark:bg-black-100  bg-white  dark:bg-grid-small-white/[0.10] bg-grid-small-black/[0.2] absolute flex items-center justify-center  ">
        <div className="  absolute pointer-events-none inset-x-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative">
        <div className="flex justify-center  my-20 z-10  items-center  ">
          <div className="max-w-[89vw] md:max--w-2xl lg-max-w-[30vw] text-center flex items-center justify-center ">
            <div className="flex flex-col  ">
              
              <h2 className=" uppercase tracking-wider text-center text-white top-32  ">
                ideas into reality through
                <TextLoop interval={2} className="pl-2 ">
                  <span>code.</span>
                  <span>mind. </span>
                </TextLoop>
              </h2>

              <TextGenerateEffect
                className="   sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl "
                words="Where Code Meets Creativity ."
                duration={4}
                filter={false}
              />

              <h2>
                <TextShimmer duration={2} className="pt-5">
                  hii ,my name is Ashish next js + node js devloper
                </TextShimmer>
              </h2>

              <div className="flex items-center justify-center pt-10 ">
                <button
                  onClick={() =>
                    setText(text === "scroll" ? "Confirm" : "scroll")
                  }
                  className="flex h-10 w-[120px] flex-shrink-0 items-center justify-center rounded-full  bg-black px-4 text-base font-medium text-zinc-200 shadow-sm transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
                >
                  <TextMorph>{text}</TextMorph>
                  <FaArrowRight className="pl-2" />
                </button>
              </div>
            </div>
            <h1 className="upppercase tracking-widest text-xs text-center text-blue-100 max-w-80 "></h1>
          </div>
        </div>
        
        <div className="flex text-center gap-2 font-bold text-pretty text-3xl">

          <h1 className="font-semibold ">here more </h1>

        <TextLoop interval={3}>
            <span>stuff.</span>
            <span>scroll</span>
          </TextLoop>
        
        </div>
        <div className=" border-2 border-black-100/10  w-full h-full  ">
        
        <Grid/>
        
          <CursorEffect/>
        </div>

      </div>
    </div>
  );
};

export default Hero;
