"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import Link from "next/link";

import Main from "./components/Main";
import AboutSection from "./components/AboutSection";
import LearningSection from "./components/LearningSection";
import VisionMissionSection from "./components/VissionMisson";
import LogoMeaningSection from "./components/LogoSection";
import QuickActions from "./components/QuickActions"; // NEW COMPONENT
import Carousel from "./components/Carousel";
import HorizontalScroll from "./components/HorizontalScroll";
import ScrollScaleImage from "./components/ScrollScaleImage";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Smooth scrolling init
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Scroll transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.85],
    [0, 0.9]
  );

  // Background slideshow logic
  const backgroundImages = [
    "/NTS_Interiors.jpg",
    "/NTS_Interiors_1.jpg",
    "/NTS_Interiors_2.jpg",
    "/NTS_Interiors_3.jpg",
  ];

  const cards = [
    {
      url: "/NTS_Interiors.jpg",
      title: "Interior View 1",
      description:
        "A beautiful interior showcasing the school's modern design.",
    },
    {
      url: "/NTS_Interiors_1.jpg",
      title: "Interior View 2",
      description:
        "A wide-angle view of a spacious and well-lit learning area.",
    },
    {
      url: "/NTS_Interiors_2.jpg",
      title: "Interior View 3",
      description: "Artfully designed corridors with natural lighting.",
    },
    {
      url: "/NTS_Interiors_3.jpg",
      title: "Interior View 4",
      description: "Collaborative spaces that encourage group learning.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // 4s per image
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <main>
      {/* Multiple Backgrounds with Crossfade */}
      <div className="fixed top-0 left-0 w-full h-[85vh] -z-10">
        {backgroundImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
              y: backgroundY,
              backgroundColor: "white",
            }}
          />
        ))}
      </div>

      {/* Main Page */}
      <motion.div className="h-[85vh] flex justify-center items-center">
        <Main />
      </motion.div>
      <section className="w-full  md:w-[80vw] mx-auto bg-white  md:absolute left-1/10 -bottom-1/8 z-20 md:mb-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          <Link href="/admission/apply-now">
            <QuickActions
              icon="/logo-apple.png"
              title="Apply Now"
              bg="bg-[#f7e8ea]"
              text="text-[#ec1c44]"
            />
          </Link>
          <Link href="/admission/apply-now">
            <QuickActions
              icon="/logo-pen.png"
              title="Agorae"
              bg="bg-[#e8eaf7]"
              text="text-[#0371d2]"
            />
          </Link>
          <Link href="/infrastructure">
            <QuickActions
              icon="/logo-bulb.png"
              title="Visit"
              bg="bg-[#f6f7e8]"
              text="text-[#fbb414]"
            />
          </Link>
          <Link href="/events">
            <QuickActions
              icon="/logo-gear.png"
              title="Gallary"
              bg="bg-[#e8f7f5]"
              text="text-[#1c8749]"
            />
          </Link>
        </div>
      </section>

      <div className="h-[20vh] hidden md:visible bg-[#fefdf8]"></div>
      {/* About Section */}
      <motion.div className=" bg-[#fefdf8] flex justify-center items-center">
        <AboutSection />
      </motion.div>
      {/* <div className="bg-[#fefdf8]    pb-20">
        <h2 className="text-4xl md:text-5xl text-[#111010] pb-20  text-center font-bold leading-tight">
          Recent Highlights
        </h2>
        <Carousel cards={cards} />
      </div> */}
      <HorizontalScroll />
      {/* Learning Section */}
      {/* <motion.div className="min-h-[80vh] bg-[#051c39] flex justify-center items-center">
        <LearningSection />
      </motion.div> */}

      <ScrollScaleImage />

      {/* Vision & Mission Section with Background */}
      {/* <motion.div className="relative min-h-screen flex justify-center items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/NTS_Interiors_4.jpg')" }}
        />
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: backgroundOpacity, zIndex: 0 }}
        />

        <div className="relative z-10">
          <VisionMissionSection />
        </div>
      </motion.div> */}

      <LogoMeaningSection />
    </main>
  );
}
