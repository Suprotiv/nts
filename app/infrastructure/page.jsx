// components/InfrastructurePage.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "Labs & Activity Centres",
  "Sporting Facilities",
  "Other Infrastructure",
  "Safety And Security Arrangements",
];

const infraData = {
  "Labs & Activity Centres": [
    {
      name: "Physics Labs",
      color: "#6C63FF",
      size: 150,
      desktop: { top: 30, left: 15 },
      mobile: { top: 30, left: 10 },
      image: "infra/labs/physics/1.jpg",
      images: [
        "infra/physics/2.jpg",
        "infra/physics/3.jpg",
        "infra/physics/4.jpg",
      ],
      description:
        "Well-equipped labs for hands-on experiments and discoveries in mechanics, electricity, and modern physics.",
    },
    {
      name: "Chemistry Labs",
      color: "#FF6584",
      size: 130,
      desktop: { top: 2, left: 60 },
      mobile: { top: 5, left: 50 },
      image: "infra/labs/chemistry/1.jpg",
      images: ["infra/chemistry/2.jpg", "infra/chemistry/3.jpg"],
      description:
        "Safe and modern lab spaces for chemical experiments and analysis.",
    },
    {
      name: "Biology Labs",
      color: "#4CAF50",
      size: 140,
      desktop: { top: 20, left: 45 },
      mobile: { top: 25, left: 45 },
      image: "infra/labs/biology/1.jpg",
      images: ["infra/biology/2.jpg", "infra/biology/3.jpg"],
      description:
        "Fully equipped labs for biological studies with microscopes and specimen collections.",
    },
    {
      name: "Music Room",
      color: "#9C27B0",
      size: 120,
      desktop: { top: 45, left: 40 },
      mobile: { top: 45, left: 30 },
      image: "infra/labs/music/1.jpg",
      images: ["infra/music/2.jpg", "infra/music/3.jpg"],
      description:
        "Soundproof rooms with instruments for practice and performance.",
    },
    {
      name: "Math Lab",
      color: "#3F51B5",
      size: 110,
      desktop: { top: 35, left: 67 },
      mobile: { top: 40, left: 60 },
      image: "infra/labs/maths/1.jpg",
      images: ["infra/maths/2.jpg"],
      description:
        "Interactive space for mathematical exploration and problem-solving.",
    },
    {
      name: "Psychology Lab",
      color: "#FF9800",
      size: 125,
      desktop: { top: 5, left: 25 },
      mobile: { top: 10, left: 20 },
      image: "infra/labs/psychology/1.jpg",
      images: ["infra/psychology/2.jpg", "infra/psychology/3.jpg"],
      description:
        "Facilities for psychological research and behavioral studies.",
    },
  ],
  "Sporting Facilities": [
    {
      name: "Basketball",
      color: "#FFD93D",
      size: 140,
      desktop: { top: 25, left: 35 },
      mobile: { top: 18, left: 25 },
      image: "infra/sporting/basketball/1.jpg",
      images: [
        "infra/sporting/basketball/1.jpg",
        "infra/sporting/basketball/2.jpg",
        "infra/sporting/basketball/3.jpg",
      ],
      description: "Full-sized courts and inter-house tournaments.",
    },
    {
      name: "Swimming",
      color: "#FF6B6B",
      size: 120,
      desktop: { top: 2, left: 37 },
      mobile: { top: 5, left: 25 },
      image: "infra/sporting/swimming/1.jpg",
      images: [
        "infra/sporting/swimming/1.jpg",
        "infra/sporting/swimming/2.jpg",
        "infra/sporting/swimming/3.jpg",
      ],
      description: "Olympic-sized pools with professional coaching.",
    },
    {
      name: "Football",
      color: "#4CAF50",
      size: 130,
      desktop: { top: 35, left: 50 },
      mobile: { top: 40, left: 45 },
      image: "infra/sporting/football/1.jpg",
      images: [
        "infra/sporting/football/1.jpg",
        "infrasporting/football/2.jpg",
        "infra/sporting/football/3.jpg",
      ],
      description:
        "Expansive fields with regular training sessions and matches.",
    },
    {
      name: "Badminton",
      color: "#9C27B0",
      size: 110,
      desktop: { top: 8, left: 75 },
      mobile: { top: 10, left: 70 },
      image: "infra/sporting/badminton/1.jpg",
      images: [
        "infra/sporting/badminton/1.jpg",
        "infra/sporting/badminton/2.jpg",
        "infra/sporting/badminton/3.jpg",
      ],
      description: "Indoor courts with high-quality equipment and coaching.",
    },
    {
      name: "Table Tennis",
      color: "#03A9F4",
      size: 100,
      desktop: { top: 50, left: 35 },
      mobile: { top: 60, left: 30 },
      image: "infra/sporting/table-tennis/1.jpg",
      images: [
        "infra/sporting/table-tennis/2.jpg",
        "infra/sporting/table-tennis/3.jpg",
        "infra/sporting/table-tennis/4.jpg",
      ],
      description: "Well-maintained indoor tables for competitive play.",
    },
    {
      name: "Rock Climbing",
      color: "#FF9800",
      size: 110,
      desktop: { top: 8, left: 20 },
      mobile: { top: 15, left: 5 },
      image: "infra/sporting/04 Rock Climbing.JPG",
      description:
        "Adventurous climbing wall to build strength and confidence.",
    },
    {
      name: "Squash",
      color: "#795548",
      size: 105,
      desktop: { top: 28, left: 22 },
      mobile: { top: 33, left: 15 },
      image: "infra/sporting/07 Squash.jpg",
      description: "Glass-walled squash court for energetic matches.",
    },
    {
      name: "Rifle Shooting",
      color: "#607D8B",
      size: 115,
      desktop: { top: 0, left: 56 },
      mobile: { top: 0, left: 50 },
      image: "infra/sporting/08 Rifle shooting.JPG",
      description: "Precision shooting with certified safety equipment.",
    },
    {
      name: "Gymnastics",
      color: "#E91E63",
      size: 120,
      desktop: { top: 18, left: 63 },
      mobile: { top: 25, left: 55 },
      image: "infra/sporting/09 Gymnastics.jpg",
      description: "Professional mats and apparatus for flexibility training.",
    },
    {
      name: "Skating",
      color: "#00BCD4",
      size: 100,
      desktop: { top: 30, left: 80 },
      mobile: { top: 35, left: 75 },
      image: "infra/sporting/10 Skating.jpg",
      description: "Smooth rink and gear for all skill levels.",
    },
    {
      name: "Volleyball",
      color: "#FFC107",
      size: 125,
      desktop: { top: 40, left: 10 },
      mobile: { top: 50, left: 8 },
      image: "infra/sporting/03 Vollyball.jpg",
      description: "Outdoor volleyball court for practice and games.",
    },
    {
      name: "Junior Play Area",
      color: "#FF4081",
      size: 100,
      desktop: { top: 48, left: 71 },
      mobile: { top: 55, left: 65 },
      image: "infra/sporting/junior-play-area/1.jpg",
      images: [
        "infra/sporting/junior-play-area/1.jpg",
        "infra/sporting/junior-play-area/2.jpg",
        "infra/sporting/junior-play-area/3.jpg",
      ],
      description: "Safe and fun playground for younger students.",
    },
  ],

  "Other Infrastructure": [
    {
      name: "Assembly Area",
      color: "#845EC2",
      size: 130,
      desktop: { top: 15, left: 20 },
      mobile: { top: 10, left: 10 },
      image: "infra/other-infrastructure/assembly-area/1.jpg",
      images: [
        "infra/other-infrastructure/assembly-area/2.jpg",
        "infra/other-infrastructure/assembly-area/3.jpg",
      ],
      description: "Spacious outdoor area for school assemblies and events.",
    },
    {
      name: "Cafeteria",
      color: "#1c8749",
      size: 110,
      desktop: { top: 35, left: 35 },
      mobile: { top: 30, left: 30 },
      image: "infra/other-infrastructure/cafeteria/1.jpg",
      images: [
        "infra/other-infrastructure/cafeteria/2.jpg",
        "infra/other-infrastructure/cafeteria/3.jpg",
      ],
      description: "Nutritious meals served in a clean, lively space.",
    },
    {
      name: "Multi-Purpose Auditorium",
      color: "#D65DB1",
      size: 140,
      desktop: { top: 13, left: 57 },
      mobile: { top: 15, left: 50 },
      image: "infra/other-infrastructure/multi-purpose-auditorium/1.jpg",
      images: [
        "infra/other-infrastructure/multi-purpose-auditorium/2.jpg",
        "infra/other-infrastructure/multi-purpose-auditorium/3.jpg",
      ],
      description: "Spacious, air-conditioned auditorium with stage lighting.",
    },
    {
      name: "Seminar Hall",
      color: "#FF6F91",
      size: 120,
      desktop: { top: 30, left: 65 },
      mobile: { top: 35, left: 60 },
      image: "infra/other-infrastructure/seminar-hall/1.jpg",
      images: [
        "infra/other-infrastructure/seminar-hall/2.jpg",
        "infra/other-infrastructure/seminar-hall/3.jpg",
      ],
      description: "Modern space for lectures, presentations and workshops.",
    },
    {
      name: "Theatre Studio",
      color: "#FF9671",
      size: 125,
      desktop: { top: 2, left: 40 },
      mobile: { top: 0, left: 35 },
      image: "infra/other-infrastructure/theatre-studio/1.jpg",
      images: [
        "infra/other-infrastructure/theatre-studio/2.jpg",
        "infra/other-infrastructure/theatre-studio/3.jpg",
      ],
      description: "Professional-grade studio for drama and performing arts.",
    },
  ],
  "Safety And Security Arrangements": [
    {
      name: "CCTV Surveillance",
      color: "#4D96FF",
      size: 120,
      desktop: { top: 30, left: 20 },
      mobile: { top: 25, left: 15 },
      image: "infra/safety-security/CCTV.jpg",
      images: [
        "infra/safety-security/CCTV-in-Bus.jpg",
        "infra/safety-security/CCTV.jpg",
      ],
      description:
        "Round-the-clock CCTV surveillance across campus and school buses.",
    },
    {
      name: "RFID Security",
      color: "#FF9A76",
      size: 100,
      desktop: { top: 5, left: 30 },
      mobile: { top: 10, left: 25 },
      image: "infra/safety-security/RFID.jpg",
      images: ["infra/safety-security/RFID.jpg"],
      description:
        "RFID-enabled entry and exit monitoring for all students and staff.",
    },
    {
      name: "School Infirmary",
      color: "#6BCB77",
      size: 110,
      desktop: { top: 35, left: 65 },
      mobile: { top: 30, left: 60 },
      image: "infra/safety-security/Infirmary-photograph.jpg",
      images: ["infra/safety-security/Infirmary-photograph.jpg"],
      description:
        "Fully-equipped medical room with trained staff for emergencies.",
    },
    {
      name: "Skool Smart System",
      color: "#FFD93D",
      size: 130,
      desktop: { top: 15, left: 50 },
      mobile: { top: 20, left: 45 },
      image: "infra/safety-security/Skool Smart.jpg",
      images: ["infra/safety-security/Skool Smart.jpg"],
      description:
        "Integrated smart school system for attendance and parent alerts.",
    },
    {
      name: "Bus CCTV",
      color: "#4D96FF",
      size: 100,
      desktop: { top: 3, left: 70 },
      mobile: { top: 5, left: 65 },
      image: "infra/safety-security/CCTV-in-Bus.jpg",
      images: ["infra/safety-security/CCTV-in-Bus.jpg"],
      description:
        "Live CCTV monitoring in all school buses for student safety.",
    },
  ],
};

export default function InfrastructurePage() {
  const [activeCategory, setActiveCategory] = useState(
    "Labs & Activity Centres"
  );
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen pt-30 bg-[#fefdf8] overflow-hidden">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#111010] mb-2">
          Infrastructure
        </h1>
        <p className="text-gray-600 text-lg">Explore our school facilities</p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 px-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-[#051c39] text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative w-full h-[100vh]">
        {infraData[activeCategory].map((item, index) => {
          const position = isMobile ? item.mobile : item.desktop;

          return (
            <motion.div
              key={item.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 150,
              }}
              className="absolute"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                layoutId={item.name}
                onClick={() => setSelectedItem(item)}
                className="flex items-center justify-center text-white font-bold text-center shadow-lg hover:scale-110 hover:cursor-pointer"
                style={{
                  width: isMobile ? item.size * 0.8 : item.size,
                  height: isMobile ? item.size * 0.8 : item.size,
                  backgroundColor: item.color,
                  borderRadius: "50%",
                }}
              >
                <span className="text-sm">{item.name}</span>
              </motion.div>
            </motion.div>
          );
        })}

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              layoutId={selectedItem.name}
              className="fixed top-0 left-0 w-screen h-screen z-10 overflow-y-auto text-white"
              style={{
                backgroundColor: selectedItem.color,
                borderRadius: "50%",
              }}
              animate={{
                borderRadius: "0%",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
              }}
              exit={{
                borderRadius: "50%",
                opacity: 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div
                className="max-w-[80vw] mx-auto p-6 mt-[20vh] md:p-12 flex flex-col md:flex-row items-center justify-center gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative w-full md:w-5/6">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    width={600}
                    height={400}
                    className="rounded-lg w-full object-cover shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-4xl font-bold mb-4">
                    {selectedItem.name}
                  </h2>
                  <p className="text-md mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
