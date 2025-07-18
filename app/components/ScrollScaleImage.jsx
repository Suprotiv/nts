"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-playfair",
  display: "swap",
});

export default function ScrollScaleImage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [4, 4.3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacityNew = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 0, 1]);
  const transformY = useTransform(scrollYProgress, [0, 0.2, 1], [500, 500, 0]);

  return (
    <div ref={container} className="Container">
      <div className="sticky">
        {/* Single center image */}
        <motion.div style={{ scale, opacity }} className="el">
          <div className="imageContainer">
            <Image
              src="/NTS_Interiors_4.jpg"
              fill
              alt="image"
              loading="lazy"
              className="rounded-xs object-contain"
            />
          </div>
        </motion.div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex  w-[80vw] mx-auto   z-10  pt-8">
          <motion.div
            className="text-center"
            style={{ opacity: opacityNew, y: transformY }}
          >
            <div className="flex flex-col w-full  gap-10 items-center  rounded-3xl  md:flex-row">
              <div className=" py-10  text-xl md:text-[34px] 2xl:text-5xl font-semibold text-[#fefdf8]">
                <FadeIn view="-400px">
                  <h3 className=" font-semibold text-[40px]  text-[#fefdf8] text-center mb-2">
                    Vision
                  </h3>
                </FadeIn>
                <FadeIn view="-400px">
                  <div className="py-6  text-center">
                    <p className="text-gray-100 text-center">
                      To foster the creation of an oasis of learning by shaping
                      young minds who seek excellence in every pursuit and
                      innovation in every approach towards life.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn view="-400px">
                  <div className="py-6 text-[40px] text-center pt-15">
                    <h3 className=" font-semibold text-[#fefdf8] mb-2">
                      Mission
                    </h3>
                  </div>
                </FadeIn>
                <FadeIn view="-400px">
                  <p className="text-gray-100 text-center">
                    To provide our students with a learning environment that is
                    future-ready with ample scope for research to hone their
                    creative acumen.
                  </p>
                </FadeIn>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
