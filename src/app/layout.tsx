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
        <div className="flex min-h-screen flex-col bg-white text-slate-900">
          <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Heil Homes
                </span>
              </Link>
              <nav className="flex items-center gap-6 text-xs font-medium tracking-[0.25em] text-slate-500">
                <Link
                  href="/hanalei"
                  className="transition hover:text-slate-900"
                >
                  Hanalei
                </Link>
                <Link
                  href="/amsterdam"
                  className="transition hover:text-slate-900"
                >
                  Amsterdam
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-16 lg:px-8">
              {children}
            </div>
          </main>

          <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-400">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
              <p>© {new Date().getFullYear()} Heil Homes. All rights reserved.</p>
              <p className="text-slate-500">
                Hanalei, Kauai · Amsterdam, Noord Holland
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
