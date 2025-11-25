"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--brand-espresso)/10 bg-(--brand-charcoal)/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 ">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="relative  overflow-hidden">
            <Image
              src="/LOGO-DRSACCO.svg"
              alt="Logo Dra. Natalia Sacco"
              width={140}
              height={140}
              className="object-contain w-[180px] h-[80px] md:w-[350px] md:h-[120px] scale-[2] "
            />
          </div>
        </Link>
        <nav
          className={cn(
            "flex flex-1 items-center justify-end gap-2 text-sm font-medium text-white",
            "max-md:absolute max-md:left-0 max-md:right-0 max-md:top-full max-md:flex-col max-md:bg-[color:var(--brand-charcoal)] max-md:px-6 max-md:py-4 max-md:text-base max-md:shadow-lg",
            !isMenuOpen && "max-md:pointer-events-none max-md:invisible max-md:opacity-0",
          )}
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-white/20 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="rounded-full bg-espresso px-5 py-3 text-sm uppercase tracking-[0.25em] text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar
          </Link>
        </nav>
        <button
          className="md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((idx) => (
              <span
                key={idx}
                className={cn(
                  "block h-0.5 w-6 bg-white transition",
                  isMenuOpen && idx === 0 && "translate-y-[6px] rotate-45",
                  isMenuOpen && idx === 1 && "opacity-0",
                  isMenuOpen && idx === 2 && "-translate-y-[6px] -rotate-45",
                )}
              />
            ))}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

