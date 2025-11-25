"use client";

import { contactContent } from "@/data/siteContent";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, string> = {
  location: "Ubicación",
  phone: "Teléfono",
  email: "Email",
};

const ContactSection = () => {
  return (
    <section
      id={contactContent.id}
      className="bg-[color:var(--brand-espresso)] text-[color:var(--brand-ivory)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr,1fr]">
        <div>
          <SectionHeading
            eyebrow="Turnos y ubicación"
            title={contactContent.title}
            description={contactContent.description}
            theme="dark"
          />
          <div className="mt-8 space-y-4">
            {contactContent.channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col rounded-2xl border border-white/20 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-white/80">
                  {iconMap[channel.type] ?? channel.label}
                </span>
                <span className="text-lg font-semibold text-white">
                  {channel.value}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/80">
            {contactContent.officeHours}
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-2xl">
          <iframe
            title="Ubicación consultorio Dra. Natalia Sacco"
            src={contactContent.mapEmbed}
            allowFullScreen
            loading="lazy"
            className="h-[360px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

