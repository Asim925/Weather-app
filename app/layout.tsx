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
    <html
      className="bg-gradient-to-b from-black to-gray-800 bg-fixed text-white"
      lang="en"
    >
      <body className={`${poppins.variable} font-sans antialiased `}>
        {children}
      </body>
    </html>
  );
}
