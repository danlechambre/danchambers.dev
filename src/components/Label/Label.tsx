import React from "react";
import { label, truncateTxt } from "./Label.module.css";
import { ThemeVariant } from "shared-types";
import { bgContrastColorClassNameMap, bgVariantClassNameMap } from "maps";

interface LabelProps {
  children: React.ReactNode;
  variant?: ThemeVariant;
  truncate?: boolean;
}

const Label = ({ children, variant = "neutral", truncate }: LabelProps) => {
  const bgColor = bgVariantClassNameMap[variant];
  const color = bgContrastColorClassNameMap[variant];

  return (
    <span
      className={`font-sm font-bold ${label} ${bgColor} ${color} ${
        truncate && truncateTxt
      }`}
    >
      {children}
    </span>
  );
};

export default Label;
