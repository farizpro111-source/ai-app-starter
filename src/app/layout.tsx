import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier OS",
  description: "Premium operating system for modern salons.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
