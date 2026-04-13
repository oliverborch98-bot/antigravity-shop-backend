import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nord Peak | Performance & Recovery",
  description: "Scandinavian performance gear for strength, mobility, and elite recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
