export type ThemeVariant =
  | "primary"
  | "primaryCompliment"
  | "secondary"
  | "tertiary"
  | "neutral";

export type TypedValueMap<T extends string> = { [K in T]: string };
