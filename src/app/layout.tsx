import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const futura = localFont({
  src: "../../public/fonts/Futura.ttf",
  variable: "--futura",
});

export const metadata: Metadata = {
  title: "To Do App",
  description: "Designed & created by Subhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
