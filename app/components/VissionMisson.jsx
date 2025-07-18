"use client";

import Image from "next/image";
import TiltCard from "./TiltCard"; // adjust path as needed
import FadeIn from "./FadeIn";

export default function VisionMissionSection() {
  return (
    <section className="py-20 text-center px-4 ">
      <FadeIn view="-500px">
        <h2 className="text-5xl font-bold text-[#fefdf8] mb-16">
          Vision & Mission
        </h2>
      </FadeIn>
      <div className="w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {/* Vision Card */}
        <FadeIn view="-500px">
          <TiltCard>
            <div className=" rounded-l-md py-20 px-10 overflow-hidden w-full ">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/NTS_Image_1.jpg"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#fefdf8] mb-2">
                  Vision
                </h3>
                <p className="text-gray-100">
                  To foster the creation of an oasis of learning by shaping
                  young minds who seek excellence in every pursuit and
                  innovation in every approach towards life.
                </p>
              </div>
            </div>
          </TiltCard>
        </FadeIn>
        {/* Mission Card */}
        <FadeIn view="-500px">
          <TiltCard>
            <div className=" rounded-r-md py-20 px-10 overflow-hidden w-full ">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/NTS_Image_13.jpg"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#fefdf8] mb-2">
                  Mission
                </h3>
                <p className="text-gray-100">
                  To provide our students with a learning environment that is
                  future-ready with ample scope for research to hone their
                  creative acumen.
                </p>
              </div>
            </div>
          </TiltCard>
        </FadeIn>
      </div>
    </section>
  );
}
