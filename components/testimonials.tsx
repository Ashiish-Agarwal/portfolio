"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Ashish delivered exceptional work on our recent project. His attention to detail and commitment to producing high-quality code were evident throughout. We were particularly impressed with his ability to quickly understand our needs and translate them into effective solutions",
    name: "Ashish agarwal",
    title: "Focus on Quality & Results",
  },
  {
    quote:
      "Working with Ashish was a pleasure. He is a strong communicator and a true team player. He was always responsive, receptive to feedback, and proactive in finding solutions. His contributions were invaluable to the success of our project.",
    name: "Ashish agarwal",
    title: "Highlighting Communication & Collaboration",
  },
  {
    quote: "Ashish demonstrated excellent problem-solving skills and a deep understanding of web development best practices. He consistently exceeded expectations by finding creative and efficient solutions to complex challenges. We highly recommend his services",
    name: "Ashish agarwal",
    title: "Emphasizing Problem-Solving Skills",
  }
 
];
