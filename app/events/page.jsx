"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { eventsData } from "../events";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import FadeIn from "../components/FadeIn";

const Portfolio = () => {
  const router = useRouter();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [hovered, setHovered] = useState(null);

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["#fefdf8", "#fefdf8"]
  );

  const overlayVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-[#fefdf8]">
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url("/NTS_Interiors_2.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">EVENTS</h1>
          <p className="text-xl font-medium text-green-400">
            Learning from the best minds in education and industry
          </p>
        </div>
      </section>

      <div
        ref={container}
        className="flex w-[80vw] mt-20 min-h-screen bg-[#fefdf8] mx-auto justify-between  scrollbar-hide"
      >
        <motion.div
          style={{ backgroundColor: bgColor }}
          className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-700"
        />

        <div className="py-10 w-full min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 justify-between">
            {eventsData.map((item, index) => (
              <FadeIn
                key={index}
                view="-100px"
                duration={0.4 + (index % 3) * 0.1}
                yvalue={20 + (index % 3) * 12}
              >
                <motion.div
                  className="relative group overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => router.push(`/events/${item.event_id}`)}
                >
                  <Image
                    src={item.mainImage}
                    alt={item.title}
                    height={720}
                    width={1280}
                    loading="lazy"
                    className="w-full h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <AnimatePresence mode="wait">
                    {hovered === index && (
                      <motion.div
                        key={`overlay-${index}`}
                        variants={overlayVariants}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        className="absolute inset-0 bg-black/60 flex flex-col justify-center p-4 pointer-events-none"
                      >
                        <motion.p
                          key={`desc-${index}`}
                          variants={textVariants}
                          className="text-sm text-gray-200 mt-1"
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <p className="pt-4 text-[#111010] font-medium text-xl">
                  {item.name}
                </p>
                <p className="text-sm text-gray-800">{item.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
