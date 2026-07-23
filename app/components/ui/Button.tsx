import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", href, children, className = "", ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-[var(--color-brand-mauve)] text-white hover:bg-[var(--color-brand-charcoal)] shadow-sm",
    outline: "border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white",
    ghost: "text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-off-white)] hover:text-[var(--color-brand-mauve)]",
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
