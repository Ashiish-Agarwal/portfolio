"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Next js",
    designation: "next js",
    image:
      "/nextjs.jpeg",
  },
  {
    id: 2,
    name: "Node js ",
    designation: "node js",
    image:
      "/nodejs.jpeg",
  },
  {
    id: 3,
    name: "Drizzle",
    designation: "drizzle",
    image:
      "/drizzle.jpeg",
  },
  {
    id: 4,
    name: "Prisma ",
    designation: "prisma",
    image:
      "/prisma.jpeg",
  },
  {
    id: 5,
    name: "React js",
    designation: "react js",
    image:
      "/reactjs.jpeg",
  },
  {
    id: 6,
    name: "Typescript ",
    designation: "TypeScript",
    image:
      "/typescript.jpeg",
  },
  {
    id: 7,
    name: "Graphql ",
    designation: "graphql",
    image:
      "/graphql.jpeg",
  },
  
   
];

export function Logos() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
