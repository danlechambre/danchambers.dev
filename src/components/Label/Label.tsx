import React from "react";
import { label } from "./Label.module.css";

interface LabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return <span className={label}>{children}</span>;
};

export default Label;
