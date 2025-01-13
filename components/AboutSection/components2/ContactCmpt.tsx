import React from "react";
import { FlipWords } from "@/components/ui/flip-words"; 


export function ContactCmpt() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        
        websites building for expiriance 
        <div className="flex pt-10  "> 
       aviinashagarwal@gmail.com

        </div>
      </div>
    </div>
  );
}
