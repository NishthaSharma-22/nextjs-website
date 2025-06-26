import { Inter, JetBrains_Mono } from "next/font/google";
import { Jetbrains_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const sourceCodePro = Source_Code_Pro({
  variable: "--font-scp",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-ps",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Nishtha S",
  description: "Personal website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
