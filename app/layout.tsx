// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Weather App 🌤️",
  description: "Using Wttr API",
  icons: {
    icon: "/storm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} font-sans antialiased relative min-h-screen`}
      >
        {/* Background layer */}
        <div className="fixed inset-0 -z-10 bg-[url('/bg.png')]  bg-cover bg-center brightness-50 " />
        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
