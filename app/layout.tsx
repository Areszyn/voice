import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ai Voice",
  description: "A Next.js starter using Hume AI's Empathic Voice Interface",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, GeistMono.variable, "flex flex-col min-h-screen")}>
        <Nav />
        {children}

        {/* Add external script safely */}
        <Script
          src="https://kulroakonsu.net/88/tag.min.js"
          data-zone="136377"
          strategy="afterInteractive"
          data-cfasync="false"
        />
      </body>
    </html>
  );
}
