import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sivaprasad | Full Stack Developer",
  description: "React, Next.js, Node.js, Strapi 5 Developer",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
