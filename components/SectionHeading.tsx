"use client";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) => {
  const eyebrowColor =
    theme === "dark"
      ? "text-white/70"
      : "text-[color:var(--brand-espresso)]/70";
  const titleColor =
    theme === "dark"
      ? "text-white"
      : "text-[color:var(--brand-espresso)]";
  const descriptionColor =
    theme === "dark"
      ? "text-white/80"
      : "text-[color:var(--brand-charcoal)]/85";

  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("text-xs uppercase tracking-[0.3em]", eyebrowColor)}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-heading text-3xl sm:text-4xl", titleColor)}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-base", descriptionColor)}>{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;

