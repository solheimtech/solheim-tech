import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import StarsBackground from "./components/StarsBackground";

export const metadata: Metadata = {
  title: "Solheim Technologies",
  description: "Solheim Technologies is a software development company that provides custom software development, web development, and digital marketing solutions."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="/ST-Icon.jpg" type="image/jpeg" />
      </head>
      <body>
      <StarsBackground />

        <div className="relative z-10">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
