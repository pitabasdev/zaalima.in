// components/ui/logo-carousel.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Logo {
  id: number;
  name: string;
  svgIcon: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: number;
}

export function LogoCarousel({ logos, speed = 0.5 }: LogoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const duplicatedLogos = [...logos, ...logos]; // Double the logos for seamless looping

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    let animationId: number;
    let position = 0;
    const carouselWidth = carousel.scrollWidth / 2;

    const animate = () => {
      position += speed;
      if (position >= carouselWidth) {
        position = 0;
      }
      carousel.scrollLeft = position;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => animationId = requestAnimationFrame(animate);

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed]);

  return (
    <div className="relative overflow-hidden py-6">
      {/* Gradient fade effects on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        ref={carouselRef}
        className="flex items-center space-x-8 py-4 overflow-x-hidden"
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-20 w-28 flex items-center justify-center p-2  ">
              <img
                src={logo.svgIcon}
                alt={logo.name}
                title={logo.name}
                className="h-[100px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}