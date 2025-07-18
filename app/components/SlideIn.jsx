"use client";

import { motion } from "framer-motion";

const SlideIn = ({
  direction = "left",
  xvalue = 40,
  duration = 1,
  children,
}) => {
  const xStart = direction === "left" ? -xvalue : xvalue;

  return (
    <motion.div
      initial={{ opacity: 0, x: xStart }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
