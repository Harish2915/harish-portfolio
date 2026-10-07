import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harish | Full Stack Developer",
  description:
    "Full Stack Developer building modern web, mobile and AI solutions that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-900">
        {children}
      </body>
    </html>
  );
}
