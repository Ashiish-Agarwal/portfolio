"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";

const content = [
  {
    title: "Focus on Continuous Learning",
    description:
      "I'm a fast learner and highly adaptable, always eager to embrace new technologies and challenges. I thrive in dynamic environments and am constantly seeking opportunities to expand my knowledge and skills.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       Focus on Continuous Learning
      </div>
    ),
  },
  {
    title: "Highlighting Project Experience",
    description:
      "I'm a highly motivated and results-oriented developer with a proven track record of successfully completing challenging projects. I'm eager to contribute my skills and experience to a dynamic and innovative team",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/th.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Emphasizing Teamwork & Collaboration",
    description:
      'Im a strong team player with excellent communication and interpersonal skills. I enjoy collaborating with others and am passionate about building high-quality products that exceed expectations.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        TeamWork
      </div>
    ),
  },
  {
    title: "Here my Gmail Account",
    description:
      "here my Gmail Account also you copied in my about section but here also my Gmail Account - aviinashagarwal@gmail.com ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Here my Gmail Account 
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
