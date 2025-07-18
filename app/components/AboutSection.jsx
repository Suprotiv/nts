"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const sections = [
  {
    title: "A School That Thinks Forward-",
    description:
      "The Newtown School, Kolkata stands as a beacon of innovation and sustainability in education. As India’s first IGBC Gold Certified Green School, we are committed to creating an environment where learning thrives in harmony with nature. At the cusp of global transformation, our institution blends academic excellence with future-ready skills, nurturing students to become thoughtful leaders of tomorrow. With a strong focus on holistic development, The Newtown School is more than an institution — it’s a vibrant hub where curiosity meets character.",
    image: "/NTS_Image_1.jpg",
    color: "text-[#1c8749]", // Brighter, more vibrant green
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="relative ">
      <div className="max-w-[80vw] mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl text-[#111010] pb-20 pt-10  text-center font-bold leading-tight">
          A School that thinks forward
        </h2>

        {sections.map((section, index) => {
          const isEven = index % 2 === 1;

          const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
          const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <motion.div className="w-full md:w-2/3">
                <div className="relative w-full aspect-[16/9]  overflow-hidden shadow-lg">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div className="w-full md:w-1/2 space-y-4">
                <p className="text-md md:text-lg 2xl:text-xl text-gray-800">
                  {section.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
