import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrightPath Fostering | Become a Foster Carer in the UK",
  description:
    "BrightPath Fostering is a leading UK fostering agency providing exceptional support, training, and competitive allowances. Change a child's future — become a foster parent today.",
  keywords:
    "fostering agency UK, become a foster carer, foster parent, fostering allowances, foster family support",
  openGraph: {
    title: "BrightPath Fostering | Change a Child's Future",
    description:
      "Join hundreds of foster families across the UK. Full support, competitive allowances, and 24/7 guidance.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
