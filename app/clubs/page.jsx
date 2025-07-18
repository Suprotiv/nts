"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const clubs = [
  {
    name: "Art & Craft",
    color: "#E87EA1",
    size: 110,
    count: 6,
    top: 6,
    left: 11,
    description:
      "Express your creativity through hands-on projects in drawing, painting, and crafts.",
    image: "clubs/art-craft/1.jpg",
    images: [
      "clubs/art-craft/2.jpg",
      "clubs/art-craft/3.jpg",
      "clubs/art-craft/4.jpg",
    ],
  },
  {
    name: "Astronomy",
    color: "#5C6BC0",
    size: 120,
    count: 5,
    top: 6,
    left: 33,
    description:
      "Explore the universe with telescopes, sky maps, and star gazing events.",
    image: "clubs/astronomy/1.jpg",
    images: [
      "clubs/astronomy/2.jpg",
      "clubs/astronomy/3.jpg",
      "clubs/astronomy/4.jpg",
    ],
  },
  {
    name: "Film Making",
    color: "#00ACC1",
    size: 120,
    count: 4,
    top: 6,
    left: 55,
    description:
      "Learn storytelling, filming, and editing to bring your vision to screen.",
    image: "clubs/film-making/1.jpg",
    images: [
      "clubs/film-making/2.jpg",
      "clubs/film-making/3.jpg",
      "clubs/film-making/4.jpg",
    ],
  },
  {
    name: "MUN",
    color: "#FF8C42",
    size: 115,
    count: 7,
    top: 6,
    left: 77,
    description:
      "Develop diplomacy, public speaking, and international relations skills in model UN simulations.",
    image: "clubs/mun/1.jpg",
    images: ["clubs/mun/2.jpg", "clubs/mun/3.jpg", "clubs/mun/4.jpg"],
  },
  {
    name: "Vedic Math",
    color: "#2E7D32",
    size: 105,
    count: 4,
    top: 28,
    left: 0,
    description:
      "Master rapid mental math techniques based on ancient Indian methods.",
    image: "clubs/vedic-math/1.jpg",
    images: [
      "clubs/vedic-math/2.jpg",
      "clubs/vedic-math/3.jpg",
      "clubs/vedic-math/4.jpg",
    ],
  },
  {
    name: "Painting",
    color: "#FFB400",
    size: 105,
    count: 5,
    top: 28,
    left: 22,
    description:
      "Master brush techniques, color theory, and various styles of painting.",
    image: "clubs/painting/1.jpg",
    images: [
      "clubs/painting/2.jpg",
      "clubs/painting/3.jpg",
      "clubs/painting/4.jpg",
    ],
  },
  {
    name: "Piano",
    color: "#8E44AD",
    size: 100,
    count: 3,
    top: 28,
    left: 44,
    description:
      "Learn classical and contemporary piano with performances and recitals.",
    image: "clubs/piano/1.jpg",
    images: ["clubs/piano/2.jpg", "clubs/piano/3.jpg", "clubs/piano/4.jpg"],
  },
  {
    name: "Debating",
    color: "#0097A7",
    size: 115,
    count: 8,
    top: 28,
    left: 66,
    description:
      "Polish your articulation and persuasive abilities through competitions and discussions.",
    image: "clubs/public-speaking/1.jpg",
    images: [
      "clubs/public-speaking/2.jpg",
      "clubs/public-speaking/3.jpg",
      "clubs/public-speaking/4.jpg",
    ],
  },
  {
    name: "Science",
    color: "#388E3C",
    size: 120,
    count: 6,
    top: 28,
    left: 88,
    description:
      "Experiment and explore the world of physics, chemistry and biology.",
    image: "clubs/science/1.jpg",
    images: [
      "clubs/science/2.jpg",
      "clubs/science/3.jpg",
      "clubs/science/4.jpg",
    ],
  },
  {
    name: "Sculpture",
    color: "#D35400",
    size: 110,
    count: 4,
    top: 50,
    left: 11,
    description:
      "Shape your imagination with clay, plaster, and mixed media sculpture techniques.",
    image: "clubs/sculpture/1.jpg",
    images: [
      "clubs/sculpture/2.jpg",
      "clubs/sculpture/3.jpg",
      "clubs/sculpture/4.jpg",
    ],
  },
  {
    name: "Self Defence",
    color: "#C0392B",
    size: 115,
    count: 6,
    top: 50,
    left: 33,
    description:
      "Empower yourself with techniques in martial arts and safety awareness.",
    image: "clubs/self-defense/1.jpg",
    images: [
      "clubs/self-defense/2.jpg",
      "clubs/self-defense/3.jpg",
      "clubs/self-defense/4.jpg",
    ],
  },
  {
    name: "Skating",
    color: "#1ABC9C",
    size: 105,
    count: 4,
    top: 50,
    left: 55,
    description:
      "Glide with confidence and learn techniques in speed and figure skating.",
    image: "clubs/skating/1.jpg",
    images: [
      "clubs/skating/2.jpg",
      "clubs/skating/3.jpg",
      "clubs/skating/4.jpg",
    ],
  },
  {
    name: "Theatre & Drama",
    color: "#6D4C41",
    size: 115,
    count: 5,
    top: 50,
    left: 77,
    description:
      "Step into the spotlight! Participate in acting, directing, and backstage management.",
    image: "clubs/theatre-drama/1.jpg",
    images: [
      "clubs/theatre-drama/2.jpg",
      "clubs/theatre-drama/3.jpg",
      "clubs/theatre-drama/4.jpg",
    ],
  },
];

export default function ClubsPage() {
  const [selectedClub, setSelectedClub] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedClub) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedClub]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fefdf8] to-white overflow-hidden pt-20 pb-20">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12 md:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111010] pt-10"
        >
          Explore Our Clubs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#666] text-lg md:text-xl"
        >
          Tap into your passion
        </motion.p>
      </div>

      {/* Clubs Grid */}
      <div className="container w-[80vw] mx-auto px-4">
        <div className="relative w-full min-h-[70vh] md:min-h-[80vh]">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              className="absolute"
              style={{
                top: `${club.top}%`,
                left: `${club.left}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              <motion.div
                layoutId={`club-${club.name}`}
                onClick={() => setSelectedClub(club)}
                className="flex items-center justify-center text-white font-bold text-center shadow-lg hover:cursor-pointer"
                style={{
                  width: `calc(${club.size}px * var(--scale-factor))`,
                  height: `calc(${club.size}px * var(--scale-factor))`,
                  backgroundColor: club.color,
                  borderRadius: "50%",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ stiffness: 400, damping: 10 }}
              >
                <div className="flex flex-col items-center justify-center px-2 pointer-events-none">
                  <span className="text-sm md:text-base">{club.name}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedClub && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedClub(null)}
            />

            {/* Scrollable Modal Content */}
            <div className="fixed inset-0 z-50 overflow-y-auto ">
              <div className="flex items-center justify-center min-h-full p-4">
                <motion.div
                  layoutId={`club-${selectedClub.name}`}
                  className="relative w-full  max-w-6xl mx-auto my-8 overflow-hidden shadow-2xl"
                  style={{ backgroundColor: selectedClub.color }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedClub(null)}
                    className="absolute top-3 right-3 z-50 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Scrollable Content Area */}
                  <div className="max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="w-full md:m-10 lg:w-1/2 relative aspect-[4/3]">
                        <Image
                          src={selectedClub.image}
                          alt={selectedClub.name}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 p-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                          {selectedClub.name}
                        </h2>
                        <p className="text-white/90 mb-4">
                          {selectedClub.count} active members
                        </p>
                        <p className="text-white/80 mb-6">
                          {selectedClub.description}
                        </p>
                        <button className="px-5 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors">
                          Join This Club
                        </button>
                      </div>
                    </div>

                    {/* Gallery Section */}
                    {selectedClub.images?.length > 0 && (
                      <div className="p-10 bg-white/10">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Gallery
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {selectedClub.images.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative aspect-square rounded overflow-hidden"
                            >
                              <Image
                                src={img}
                                alt={`${selectedClub.name} gallery ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 33vw"
                                loading={idx > 0 ? "lazy" : "eager"}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive Scaling */}
      <style jsx global>{`
        :root {
          --scale-factor: 1;
        }
        @media (max-width: 768px) {
          :root {
            --scale-factor: 0.8;
          }
        }
        @media (max-width: 640px) {
          :root {
            --scale-factor: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
