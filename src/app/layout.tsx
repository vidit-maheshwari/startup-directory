import Navbar from "@/components/Navbar";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google';
import 'easymde/dist/easymde.min.css';
import { Toaster } from "@/components/ui/toaster";



const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} `}
      >
    
        <Navbar />
        {children}
        <Toaster />
   
      </body>
    </html>
  );
}
