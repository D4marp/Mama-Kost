import type { NextConfig } from "next";

const config: NextConfig = {
  // Keep production builds separate from the active development preview.
  distDir: process.env.NODE_ENV === "production" ? ".next-production" : ".next",
};

export default config;
