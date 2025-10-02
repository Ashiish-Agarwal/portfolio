"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Metaverss ",
      button: "Explore Component",
      src: "/refokus.png",
      Linksrc:'https://bnbnbasdwdfvb.netlify.app/',
      

      
    },
    {
      title: "Ai ui ",
      button: "Explore Component",
      src: "/avatar.jpg",
      Linksrc:'https://ai-ontop.netlify.app/',
   
     
    },
    {
      title: "Gaming  ui ",
      button: "Explore Component",
      src: "/avatar.jpg",
      Linksrc:'https://gaminginin.netlify.app/',
   
     
    }
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
