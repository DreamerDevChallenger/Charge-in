import { Chivo, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
  preload: true,
  display: "fallback",
});

export const chivo = Chivo({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  preload: true,
  display: "fallback",
});
