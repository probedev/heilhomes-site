import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heil Homes | Hanalei & Amsterdam Vacation Rentals",
  description:
    "Modern vacation rentals in Hanalei Bay, Kauai and central Amsterdam. Thoughtfully designed homes with premium amenities and convenient locations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-50">
          <header className="border-b border-white/10 bg-black/60 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Heil Homes
                </span>
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-zinc-200">
                <Link
                  href="/hanalei"
                  className="transition hover:text-amber-300"
                >
                  Hanalei
                </Link>
                <Link
                  href="/amsterdam"
                  className="transition hover:text-amber-300"
                >
                  Amsterdam
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
              {children}
            </div>
          </main>

          <footer className="border-t border-white/10 bg-black/80 py-6 text-xs text-zinc-400">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
              <p>© {new Date().getFullYear()} Heil Homes. All rights reserved.</p>
              <p className="text-zinc-500">
                Hanalei, Kauai · Amsterdam, Noord Holland
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
