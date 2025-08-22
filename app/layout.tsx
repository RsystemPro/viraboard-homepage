import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/page";
import { cookies, headers } from "next/headers";
import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";
import { NextRequest, NextResponse } from "next/server";
import PagesLayout from "./ui/layouts/pagesLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViraBoard",
  description: "Online electronic board",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const lang = headers().get('lang') as language      //came from middleware

  return (
    <html lang="en">
      <body style={{ direction: lang === 'En' ? 'ltr' : 'rtl' }}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
