import localFont from "next/font/local";

export const microgramma = localFont({
  src: [
    {
        path: "./fonts/microgrammanormal.ttf", 
        weight: "400", 
        style: "normal"

    },
    {
    path: "./fonts/Microgramma D Extended Bold.otf", 
    weight: "700", 
    style: "normal"
  }
],
  variable: "--font-microgramma",
  display: "swap",
},
);