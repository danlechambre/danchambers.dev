import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-sans",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/inter-var.woff2"],
          },
        ],
      },
    },
    {
      name: "Lora",
      cssVariable: "--font-serif",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/lora-var.woff2"],
          },
          {
            weight: "100 900",
            style: "italic",
            src: ["./src/assets/fonts/lora-italic-var.woff2"],
          },
        ],
      },
    },
  ],
});
