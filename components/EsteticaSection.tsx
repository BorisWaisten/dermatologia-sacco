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
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr,0.9fr]">
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
          <motion.div
            className="rounded-3xl border border-[color:var(--brand-sand)]/40 bg-[color:var(--brand-ivory)]/60 p-6 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--brand-espresso)]/70">
              Protocolos en consultorio
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-4 text-[color:var(--brand-charcoal)]/90">
              {dermatologiaEstetica.treatments.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {dermatologiaEstetica.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="rounded-2xl border border-[color:var(--brand-blush)]/60 bg-white p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <h3 className="font-heading text-xl text-[color:var(--brand-espresso)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--brand-charcoal)]/80">
                  {pillar.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EsteticaSection;

