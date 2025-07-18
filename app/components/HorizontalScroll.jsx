"use client";
import React, { useRef, useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { eventsData } from "../events";
import Link from "next/link";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-playfair",
  display: "swap",
});

const HorizontalScroll = () => {
  const lenisRef = useRef(null);

  // useEffect(() => {
  //   const lenis = new Lenis();
  //   lenisRef.current = lenis;

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   // 🚨 Clean up on component unmount
  //   return () => {
  //     lenis.destroy();
  //     lenisRef.current = null;
  //   };
  // }, []);
  return (
    <div className="bg-[#fefdf8]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]); //1% , 60.5%

  return (
    // <section ref={targetRef} className="relative h-[300vh]">
    //   <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
    //     <div className="flex  p-[10vh] items-center  text-[#fefdf8] font-semibold text-6xl justify-center">
    //       <p className={playfair.className}>accolades</p>
    //     </div>

    //     <motion.div style={{ x }} className="flex gap-4 px-10">
    //       {cards.map((card) => (
    //         <Card card={card} key={card.id} />
    //       ))}
    //     </motion.div>
    //   </div>
    // </section>
    <section ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-0 flex flex-col h-[100vh] items-center overflow-hidden">
        <div className="flex  py-[10vh] items-center  text-[#111010] font-semibold text-5xl justify-center">
          <p>Recent Highlights</p>
        </div>

        <motion.div style={{ x }} className="flex gap-4 px-10">
          {eventsData.slice(0, 5).map((event) => (
            <Link key={event.event_id} href={`/events/${event.event_id}`}>
              <Card card={event} key={event.event_id} />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Animation variants
const overlayVariants = {
  initial: { opacity: 0 },
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

const Card = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative h-[330px] md:h-[400px] 2xl:h-[600px] w-[350px] md:w-[450px] 2xl:w-[650px] overflow-hidden shadow-xl bg-neutral-200 cursor-pointer rounded-xs"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          backgroundImage: `url(${card.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />

      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div
            key={`overlay-${card.id}`}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            className="absolute inset-0 bg-black/70 z-10 flex items-center p-6"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <motion.h3
                variants={textVariants}
                className="text-white text-3xl font-semibold text-center"
              >
                {card.name}
              </motion.h3>
              <motion.p
                variants={textVariants}
                className="text-gray-300 mt-5 text-lg font-medium text-center"
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HorizontalScroll;
