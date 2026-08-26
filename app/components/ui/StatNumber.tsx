"use client";

import React from "react";
import CountUp from "@/app/components/ui/CountUp";

interface StatNumberProps {
  value: string;
  className?: string;
  duration?: number;
}

export function StatNumber({ value, className = "", duration = 2 }: StatNumberProps) {
  // Parse any numbers and optional prefix/suffix like "15+", "300+", "50+"
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  const prefix = match[1];
  const targetNumber = parseInt(match[2], 10);
  const suffix = match[3];

  return (
    <span className={className}>
      {prefix}
      <CountUp to={targetNumber} duration={duration} separator="," />
      {suffix}
    </span>
  );
}
