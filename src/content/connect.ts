type ConnectMethodKey = "email" | "github" | "linkedin" | "bluesky";

type ConnectMethod = {
  label: string;
  url: string;
};

export const connectMethods: Record<ConnectMethodKey, ConnectMethod> = {
  email: {
    label: "hi@danchambers.dev",
    url: "mailto:hi@danchambers.dev",
  },
  github: {
    label: "github.com/danlechambre",
    url: "https://github.com/danlechambre",
  },
  linkedin: {
    label: "linkedin.com/in/danlechambre",
    url: "https://www.linkedin.com/in/danlechambre/",
  },
  bluesky: {
    label: "Bluesky",
    url: "https://bsky.app/profile/danlechambre.bsky.social",
  },
} as const;
