import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import ContextProvider, { CreateContextProvider } from "@/Context/ContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next App",
    template: "%s | Next App"
  },
  description: "Best fast food in Dhaka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        
        <main>
          <ContextProvider>{children}</ContextProvider>
        </main>
      </body>
    </html>
  );
}
