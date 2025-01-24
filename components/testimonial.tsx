"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "refukus clone ",
      button: "Explore Component",
      src: "/refokus.png",
      Linksrc:'https://refukus-clone.netlify.app/',
      

      
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/avatar.jpg",
      Linksrc:'/akf',
   
     
    }
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
