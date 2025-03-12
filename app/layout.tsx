import Head from "next/head";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { cn } from "@/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "Ai Voice",
  description: "A Next.js starter using Hume AI's Empathic Voice Interface",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="monetag" content="6c390819b6af56a65b7afa261d811540">
      </Head>
      <body className={cn(GeistSans.variable, GeistMono.variable, "flex flex-col min-h-screen")}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
