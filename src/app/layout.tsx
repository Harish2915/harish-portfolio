import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harish | Full Stack Developer",
  description:
    "Full Stack Developer building modern web, mobile and AI solutions that solve real-world problems.",
  icons: {
    icon: [
      { url: "/logo/emblem.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo/emblem.png",
    apple: "/logo/emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/emblem.png" type="image/png" />
        <link rel="shortcut icon" href="/logo/emblem.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/emblem.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var navEntries = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType('navigation');
                var isReload = navEntries && navEntries[0] && navEntries[0].type === 'reload';
                var hasSeen = sessionStorage.getItem('harish_portfolio_intro_shown');
                if (hasSeen && !isReload) {
                  document.documentElement.classList.add('intro-skipped');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full font-sans bg-white text-zinc-900 selection:bg-orange-500/20 selection:text-orange-900">
        {children}
      </body>
    </html>
  );
}
