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
    <html lang="en">
      <body className="pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
