// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import VantaClouds from "./components/VantaClouds"; // adjust path if needed

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
        className={`${poppins.variable} text-white font-sans antialiased relative min-h-screen`}
      >
        {/* Background layer */}
        <VantaClouds />
        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
