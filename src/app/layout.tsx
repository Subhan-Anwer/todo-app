import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const arial = localFont({
  src: "./fonts/Arial.ttf",
  variable: "--arial",
});
const futura = localFont({
  src: "./fonts/Futura.ttf",
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
        className={`${arial.variable} ${futura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
