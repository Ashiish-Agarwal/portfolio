import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextLoop } from "../ui/textloop";
import { TextScrambleCustomCharacterDuration } from "./components2/TextScrambleCustomTrigger";

export function Topnav() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Thank s a Lot <br /> intrested in my work
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
       <div className="flex gap-2 font-thin">
        Here my 
        <TextLoop interval={3}>
          <span className="text-red-600 font-thin">Gmail</span>
          <span className="font-thin">Gmail</span>
        </TextLoop>
       </div>
       <TextScrambleCustomCharacterDuration/>
      </p>
    </BackgroundLines>
  );
}
