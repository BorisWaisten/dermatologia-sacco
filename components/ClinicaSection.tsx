"use client";

import { motion } from "framer-motion";
import { dermatologiaClinica } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";

const ClinicaSection = () => {
  return (
    <motion.section
      id={dermatologiaClinica.id}
      className="bg-[color:var(--brand-sand)]/15 text-[color:var(--brand-charcoal)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        <SectionHeading
          eyebrow="Salud de la piel"
          title={dermatologiaClinica.title}
          description={dermatologiaClinica.description}
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="rounded-3xl border border-[color:var(--brand-sand)] bg-white/80 p-6 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--brand-espresso)]/70">
              Áreas de enfoque
            </p>
            <ul className="mt-4 space-y-3 text-[color:var(--brand-charcoal)]/90">
              {dermatologiaClinica.focusAreas.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <span className="mt-2 p-[2.5] h-1.5 w-1.5 rounded-full bg-[color:var(--brand-espresso)]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-[color:var(--brand-sand)] bg-white/80 p-6 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--brand-espresso)]/70">
              Formación continua
            </p>
            <ul className="mt-4 space-y-3 text-[color:var(--brand-charcoal)]/90">
              {dermatologiaClinica.credentials.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex gap-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <span className="mt-2 p-[2.5] h-1.5 w-1.5 rounded-full bg-[color:var(--brand-espresso)]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.p
          className="rounded-3xl border border-[color:var(--brand-sand)]/70 bg-white/60 p-6 text-lg text-[color:var(--brand-espresso)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {dermatologiaClinica.reassurance}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ClinicaSection;

