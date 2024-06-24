import type { Metadata } from "next";
import { Inter } from "next/font/google";


//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricera",
  description: "a price comparison website where you find anything you want for the best price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background: "rgb(215 205 205)"}} /*className={inter.className}*/>{children}</body>
    </html>
  );
}
