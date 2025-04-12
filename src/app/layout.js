import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

import Script from "next/script";  

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./common/Header/Header";
import { Footer } from "./common/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buy/Sell High Quality Agricultural Products Online | F2DF",
  description: "top-quality products available at F2DF's online shop. Buy seeds, fertilizers, tools, and more to enhance your farming experience. Get the best deals and fast shipping now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
     <Header/>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
     <Footer/>
      </body>
    </html>
  );
}
