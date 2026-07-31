import type { Metadata } from "next";
import localFont from "next/font/local";

import { Providers } from "@/app/providers";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" }
  ],
  variable: "--font-inter"
});

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/playfair-900.woff2", weight: "900", style: "normal" }
  ],
  variable: "--font-playfair"
});

const firaCode = localFont({
  src: [
    { path: "./fonts/fira-code-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/fira-code-600.woff2", weight: "600", style: "normal" }
  ],
  variable: "--font-fira-code"
});

export const metadata: Metadata = {
  title: "COSY Studio",
  description: "AI-powered visual IDE and low-code web builder."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${firaCode.variable} min-h-screen bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
