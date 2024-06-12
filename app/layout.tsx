import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
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

        <header className="relative z-10">
          <Header />
          <Navbar />
        </header>
        <div className="relative z-0">
          <main>{children}</main>
        </div>
        <div className="relative z-10">
          <Footer />
        </div>

      </body>

    </html>
  )
}
