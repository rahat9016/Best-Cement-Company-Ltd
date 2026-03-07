import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Cement Company Ltd | Residential & Commercial Construction Solutions",
  description:
    "Best Cement Company Ltd delivers premier residential and commercial construction solutions. 25+ years of experience, 85+ projects completed. Built to last, delivered on time.",
  keywords: [
    "construction",
    "commercial building",
    "residential construction",
    "contractor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
