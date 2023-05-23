import { ThemeVariant, TypedValueMap } from "shared-types";

export const bgVariantClassNameMap: TypedValueMap<ThemeVariant> = {
  primary: "bg-primary",
  primaryCompliment: "bg-primary-compliment",
  secondary: "bg-secondary",
  neutral: "bg-neutral-dark",
  tertiary: "bg-tertiary",
} as const;

export const bgContrastColorClassNameMap: TypedValueMap<ThemeVariant> = {
  primary: "txt-white",
  secondary: "txt-black",
  neutral: "txt-white",
  tertiary: "txt-white",
  primaryCompliment: "txt-white",
};
