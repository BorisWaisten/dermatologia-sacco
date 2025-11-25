"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroContent } from "@/data/siteContent";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.carouselImages.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="inicio"
      className="bg-[color:var(--brand-ivory)] text-[color:var(--brand-espresso)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <motion.h1
          className="font-heading text-3xl sm:text-4xl text-center leading-tight text-[color:var(--brand-espresso)] mb-8 sm:mb-12 lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {heroContent.title}
        </motion.h1>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Columna izquierda: Información */}
          <motion.div
            className="space-y-4 sm:space-y-6 lg:space-y-8 w-full lg:w-3/4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-base sm:text-lg leading-relaxed text-[color:var(--brand-charcoal)]/90 lg:text-xl">
              {heroContent.leftCopy}
            </p>
            <div className="space-y-3 sm:space-y-4 text-[color:var(--brand-charcoal)]/90">
              {heroContent.rightCopy.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="leading-relaxed text-sm sm:text-base lg:text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
          {/* Columna derecha: Carrusel de Imágenes */}
          <motion.div
            className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-[32px] border-2 sm:border-4 border-white/80 shadow-xl sm:shadow-2xl lg:aspect-[4/5] w-full lg:w-full lg:max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {heroContent.carouselImages.map((image, index) => (
              <motion.div
                key={image}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Image
                  src={image}
                  alt={`Dra. Natalia Sacco - Imagen ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

