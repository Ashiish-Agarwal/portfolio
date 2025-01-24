import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNavDemo } from "@/components/FloatingNav";
import Footers from "@/components/Footers";
import Loading from "@/components/Loading";
import { Suspense } from "react";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " ashish portfolios for next js ",
  description: "Ashish Portfolio next js react node js backend devloper hire web devlopers ,freelancer  web devlopers  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased dark:bg-black-100`}
      >
        <Suspense fallback={<Loading/>}>
      
      
           <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            
            ><div className="">

            <FloatingNavDemo/>
            {children}
            </div>

          </ThemeProvider>
          
            <Footers/> 
            </Suspense>
            
        
      </body>
    </html>
  );
}
