import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sayyed Hasham & Sana — Wedding Invitation",
  description:
    "Marriage ceremony on 26 April 2026 and reception on 28 April 2026. With love from the Kazi family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-gradient-to-b from-[#fff8f6] via-[#faf6f0] to-[#f3ebe5] text-[#2c1810]">
        {children}
      </body>
    </html>
  );
}
