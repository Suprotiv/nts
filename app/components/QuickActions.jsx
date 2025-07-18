"use client";

import Image from "next/image";
import Botton from "./Botton";

export default function QuickActions({ icon, title, bg, text }) {
  return (
    <section className={`${bg} py-8 md:py-14 px-6 shadow-lg group`}>
      <div className="flex flex-col justify-center items-center">
        <div className="group-hover:cursor-pointer group-hover:-translate-y-1 transition-all duration-300">
          <Image
            src={icon}
            alt={title}
            width={80}
            height={80}
            className="mb-4 object-cover transition-all duration-300"
          />
        </div>
        <Botton size="md" color={text} value={title} />
      </div>
    </section>
  );
}
