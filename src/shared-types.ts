export type ThemeVariant = "primary" | "secondary" | "tertiary" | "neutral";

export type TypedValueMap<T extends string> = { [K in T]: string };
