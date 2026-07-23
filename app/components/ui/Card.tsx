import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  colorClass?: string;
  className?: string;
}

export const Card = ({
  title,
  description,
  icon,
  colorClass = "bg-[var(--color-brand-sky)]",
  className = "",
}: CardProps) => {
  return (
    <div
      className={`rounded-[2rem] p-8 md:p-10 flex flex-col h-full ${colorClass} ${className}`}
    >
      {icon && (
        <div className="text-4xl mb-6 bg-white/40 w-16 h-16 rounded-full flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)] mb-4">
        {title}
      </h3>
      <p className="text-[var(--color-brand-espresso)] text-lg leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};
