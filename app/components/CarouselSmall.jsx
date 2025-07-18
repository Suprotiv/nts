"use client";

import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const CarouselSmall = ({ cards = [], text_color }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 4000, stopOnInteraction: false },
      (root) => root.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Embla carousel container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, index) => (
            <div
              key={index}
              className="px-3 flex flex-col items-center text-center 
                         min-w-[80%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] xl:min-w-[20%]"
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={card.url}
                  alt={card.title}
                  width={300}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-white">
                <h3
                  className={`text-base md:text-lg ${text_color} font-semibold`}
                >
                  {card.title}
                </h3>
                <p className={`text-sm mt-1 ${text_color} opacity-80`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow hover:scale-110 transition"
        aria-label="Previous"
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black p-2 rounded-full shadow hover:scale-110 transition"
        aria-label="Next"
        disabled={!canScrollNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CarouselSmall;
