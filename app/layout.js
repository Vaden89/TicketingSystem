"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./providers/auth.context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> Car ticketing System </title>
      </head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
