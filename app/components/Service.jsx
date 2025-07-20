"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import SlideIn from "./SlideIn";

const Service = ({
  title,
  description,
  icon,
  backgroundImage,
  orientation,
}) => {
  // Build low-res image path
  const lowResPath = `lowres/${backgroundImage.replace(
    /\.(jpg|jpeg|png|webp)/,
    "_lowres.jpg"
  )}`;

  return (
    <div className="overflow-hidden">
      <SlideIn direction={orientation}>
        <div
          className={`flex max-w-[80vw] mx-auto flex-col md:flex-row gap-10 items-center px-6 py-12 rounded-lg text-[#111010] ${
            orientation === "right" ? "md:flex-row-reverse" : ""
          } `}
        >
          {/* Image Section */}
          <div
            className="blur-load w-full md:w-[55%] h-[55vh] rounded-[10px] relative"
            style={{
              backgroundImage: `url(${lowResPath})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          >
            <div className="w-full h-full rounded-[10px] overflow-hidden">
              <Image
                src={`${backgroundImage}`}
                alt={`${title} image`}
                layout="fill"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="p-4 w-full md:w-1/2 text-center md:text-left">
            <FontAwesomeIcon
              icon={icon}
              size="3x"
              className="text-[#ae0c00] mb-4"
            />
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-base text-gray-900 mt-4">{description}</p>
          </div>
        </div>
      </SlideIn>
    </div>
  );
};

export default Service;
