import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";



export const metadata: Metadata = {
  title: "Car Store",
  description: "your next holiday chariot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
