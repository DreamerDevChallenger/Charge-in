import { Chivo, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const chivo = Chivo({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
