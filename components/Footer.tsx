"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/data/siteContent";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <motion.footer
      className="bg-white border-t border-sand/30 py-12 text-espresso"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Logo y nombre */}
          <div className="flex flex-col gap-4">
            <Link href="#inicio" className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-[color:var(--brand-espresso)] p-2">
                <Image
                  src="/LOGO-DRSACCO.svg"
                  alt="Logo Dra. Natalia Sacco"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="font-heading text-lg text-espresso">
                  Dra. Natalia Sacco
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-espresso/70">
                  Dermatología & Estética
                </p>
              </div>
            </Link>
            <p className="text-xs text-espresso/70">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>



          {/* Redes sociales */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.4em] text-espresso/70">
              Seguinos
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

