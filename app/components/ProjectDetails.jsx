"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Carousel from "./Carousel";
import { eventsData } from "../events";

// Mock project data

export default function ProjectDetails() {
  const { scrollYProgress } = useScroll();
  const { event_id } = useParams();

  const [project, setProject] = useState(null);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const found = eventsData.find((p) => p.event_id?.toString() === event_id);
    setProject(found || null);
  }, [event_id]);

  if (!project) {
    return (
      <main className="h-screen flex items-center justify-center text-red-500">
        <p>Project not found</p>
      </main>
    );
  }

  const {
    question,
    answer,
    summaryTitle,
    summary,
    meta,
    images = {},
  } = project;

  return (
    <main>
      {/* Parallax Background */}
      <motion.div
        className="aspect-[16/9] h-[35vh] md:h-[100vh]"
        style={{
          y: backgroundY,
          backgroundImage: `url(/${project.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 50,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      />

      {/* Hero Section */}
      <motion.div className="mainPage h-[35vh] md:h-[100vh] flex justify-end items-center flex-col">
        <div
          className="relative bottom-0 flex items-end pb-5 left-0 w-full h-15 md:h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          }}
        >
          <ChevronDown
            size={50}
            strokeWidth={0.8}
            className="text-white z-20 animate-bounce mx-auto"
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div className="projects bg-white min-h-screen flex flex-col justify-center items-center">
        {/* Image Sliders & Columns */}
        {images.slider1?.length > 0 && (
          <div className="bg-[#fefdf8] pb-8 md:py-20">
            <Carousel images={images.slider1} />
          </div>
        )}

        {images.column1?.length > 0 && (
          <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 md:pb-20">
            {images.column1.map((imgSrc, index) => (
              <Image
                key={index}
                src={`/${imgSrc}`}
                alt={`Project image ${index + 1}`}
                width={800}
                height={450}
                loading="lazy"
                className="w-full object-cover rounded-sm"
              />
            ))}
          </div>
        )}

        {images.slider2?.length > 0 && (
          <div className="bg-[#fefdf8] pb-8 md:pb-20">
            <Carousel images={images.slider2} />
          </div>
        )}

        {images.column2?.length > 0 && (
          <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 md:pb-20">
            {images.column2.map((imgSrc, index) => (
              <Image
                key={index}
                src={`/${imgSrc}`}
                alt={`Project image ${index + 1}`}
                width={800}
                height={450}
                loading="lazy"
                className="w-full object-cover rounded-sm"
              />
            ))}
          </div>
        )}
      </motion.div>
    </main>
  );
}
