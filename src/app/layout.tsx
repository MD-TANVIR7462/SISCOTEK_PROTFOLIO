import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { exo } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SISCOTEK",
  description:
    "We are your one-stop solution for all digital demands because of our broad range of digital domain experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="!scroll-smooth dark"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={cn(
          exo.className,
          "relative min-h-screen overflow-x-hidden text-foreground/90 antialiased ",
        )}
      >
        <Providers>{children}</Providers>
        <div
          className="fixed inset-0 bg-[url('/images/bg-gradient.webp')] 
          bg-cover bg-center opacity-40"
        />

        {/* Left Image */}
        <div
          className="fixed left-0 top-0 h-full w-1/2 bg-[url('/images/docs-left.png')] bg-cover bg-left bg-no-repeat 
    opacity-30"
        />
      </body>
    </html>
  );
}
