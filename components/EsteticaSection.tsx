"use client";

import { motion } from "framer-motion";
import { dermatologiaEstetica } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";

const EsteticaSection = () => {
  return (
    <motion.section
      id={dermatologiaEstetica.id}
      className="bg-white text-[color:var(--brand-charcoal)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <SectionHeading
          eyebrow="Medicina estética"
          title={dermatologiaEstetica.title}
          description={dermatologiaEstetica.description}
        />
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {dermatologiaEstetica.secondParagraph && (
            <motion.p
              className="text-lg leading-relaxed text-[color:var(--brand-charcoal)]/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {dermatologiaEstetica.secondParagraph}
            </motion.p>
          )}
          <motion.div
            className="rounded-3xl border border-[color:var(--brand-sand)]/40 bg-[color:var(--brand-ivory)]/60 p-6 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--brand-espresso)]/70 mb-4">
              Encontrás en mi consultorio:
            </p>
            <ul className="space-y-3 text-[color:var(--brand-charcoal)]/90">
              {dermatologiaEstetica.treatments.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <span className="mt-2 p-[2.5] h-1.5 w-1.5 rounded-full bg-[color:var(--brand-espresso)] flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EsteticaSection;

