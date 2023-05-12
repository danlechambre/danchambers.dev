import React from "react";
import { label } from "./Label.module.css";
import { ThemeVariant } from "shared-types";
import { bgContrastColorClassNameMap, bgVariantClassNameMap } from "maps";

interface LabelProps {
  children: React.ReactNode;
  variant?: ThemeVariant;
}

const Label = ({ children, variant = "neutral" }: LabelProps) => {
  const bgColor = bgVariantClassNameMap[variant];
  const color = bgContrastColorClassNameMap[variant];

  return <span className={`${label} ${bgColor} ${color}`}>{children}</span>;
};

export default Label;
