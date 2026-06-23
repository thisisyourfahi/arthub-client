import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { Toast } from "@heroui/react";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata = {
  title: "ArtHub",
  description: "Helping art lovers connect globally.",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="dark"
      lang="en" suppressHydrationWarning
      className={`${workSans.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="container min-h-screen mx-auto">
          {children}
        </main>
        <Footer />
        <Toast.Provider />
      </body>
    </html>
  );
}
