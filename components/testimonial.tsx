import { AnimatedTestimonials } from "./ui/animated-testimonials"; 

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora facere quam earum autem pariatur! Alias magnam veritatis doloremque rerum cum?",
      name: "jon doh",
      designation: "dummy data here...",
      src: "/avi.png",
      Link:'/link1'
      
      
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora facere quam earum autem pariatur! Alias magnam veritatis doloremque rerum cum?",
      name: "ashish agarwal",
      designation: "dummy data here...",
      src: "/avatar.jpg",
      Link:'/link2'
      
    }
   
  ];
  return(<>
  <div className="relative">

   <AnimatedTestimonials  testimonials={testimonials}  />
  </div>
  </>
  )
}
