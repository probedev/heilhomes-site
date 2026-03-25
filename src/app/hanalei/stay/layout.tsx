import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanalei, Kauai | Heil Homes",
  description:
    "Modern plantation cottage near Hanalei Bay—main house, ohana guest house, galleries, and booking.",
};

export default function HanaleiStayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
