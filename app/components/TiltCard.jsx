"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function TiltCard({ children, className = "" }) {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (bounds.left + bounds.width / 2);
    const offsetY = event.clientY - (bounds.top + bounds.height / 2);

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`rounded-xl   transition-all duration-300 ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
