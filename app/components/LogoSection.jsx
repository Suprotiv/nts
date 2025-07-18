"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";

const logoConcepts = [
  {
    src: "/logo-1.jpg",
    alt: "Apple - Nurture",
    title: "Nurture",
    description:
      "The apple is a symbol of enlightenment and nurturing. It spurred Sir Isaac Newton to imagine gravity and represents nourishment and good health.",
    color: "text-[#e63946]",
  },
  {
    src: "/logo-2.jpg",
    alt: "Bulb - Inspire",
    title: "Inspire",
    description:
      "The incandescent bulb, invented by Edison, symbolizes inspiration. It lights minds and symbolizes epiphany and creative ignition.",
    color: "text-[#f1c40f]",
  },
  {
    src: "/logo-3.jpg",
    alt: "Pen - Educate",
    title: "Educate",
    description:
      "The pen is mightier than the sword. Through ages of writing, it stands for education, wisdom, and the spread of civilization.",
    color: "text-[#3498db]",
  },
  {
    src: "/logo-4.jpg",
    alt: "Gear - Enlighten",
    title: "Enlighten",
    description:
      "The gear represents transformation and progress. It enhances systems and represents motion, efficiency, and innovation.",
    color: "text-[#2ecc71]",
  },
];

export default function LogoMeaningSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#fefdf8] to-[#fefdf8] py-24 px-6 text-[#111010]">
      <div className="max-w-[80vw] mx-auto">
        <FadeIn view="-200px">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What's in a Logo?
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Cards */}
          <div className="space-y-8">
            {logoConcepts.map((item, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg h-38"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Text Descriptions */}
          <div className="space-y-8">
            {logoConcepts.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
              >
                <h3 className={`text-2xl font-semibold mb-2 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-md leading-relaxed text-gray-800">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
