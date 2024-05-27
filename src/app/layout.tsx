import type { Metadata } from "next";
import { REM } from "next/font/google";
import "./globals.css";

// Icons
import { Navbar } from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

const rem = REM({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rem.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
