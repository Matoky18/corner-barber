import type { Metadata} from "next";
import {  Michroma ,Roboto , Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const inter = Inter({
  variable : "--font-inter",
  subsets: ["latin"],
  weight : "400"
})

const michroma = Michroma({
   variable : "--font-michroma",
   subsets: ["latin"],
   weight : "400"
})

const roboto = Roboto ({
  variable : "--font-roboto",
  subsets : ["latin"]
})

export const metadata: Metadata = {
  title: "Corner Barber",
  description: "Réservez votre coupe au Corner Barber  dégradés, barbe et style urbain au cœur de la ville",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={` ${michroma.variable} ${roboto.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
