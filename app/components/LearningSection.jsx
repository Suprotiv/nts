"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function LearningSection() {
  return (
    <section className=" text-[#fefdf8]  min-h-[50vh] flex justify-center items-center py-16">
      <FadeIn>
        <div className="max-w-[80vw] min-h-[50vh] mx-auto flex flex-col md:flex-row items-stretch">
          {/* Left Image */}

          <div className="relative w-full md:w-1/2   rounded-xl">
            <Image
              src="/NTS_Interiors_8.jpg" // <-- Place your image in /public
              alt="Children reading"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

          {/* Right Text Block */}
          <div className="w-full md:w-1/2  p-8 md:p-12 rounded-r-xl flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              THE FOUR PILLARS OF LEARNING
            </h2>
            <p className="text-md md:text-lg mb-4 text-[#fefdf8] leading-relaxed">
              The new age school in Kolkata has everything to offer to parents
              and children. From a unique four-way learning process based on the
              system of <strong>Nurture</strong> (the apple),{" "}
              <strong>Inspire</strong> (the bulb), <strong>Educate</strong> (the
              pen) and <strong>Enlighten</strong> (the gear) that has been
              tailored to bring out the potential in every child to a staff of
              dedicated teachers.
            </p>
            <p className="text-md md:text-lg leading-relaxed text-[#fefdf8]">
              Quality thereby has become a natural extension of staff
              environment, teamwork, innovation, ethical behaviour, pride in our
              service and integrity.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
