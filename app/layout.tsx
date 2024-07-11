import './globals.css';
import LayoutWrapper from './components/LayoutWrapper';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StarsBackground from "./components/StarsBackground";
import logo from "../public/assets/images/ST-Icon.jpg";

export const metadata = {
  title: "Solheim Technologies",
  description: "Solheim Technologies is a software development company that provides custom software development, web development, and digital marketing solutions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo.src} type="image/jpeg" />
      </head>
      <body>
        <StarsBackground />
        <header className="relative z-10">
          <Header />
          <Navbar />
        </header>
        <div className="relative z-0">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
        <div className="relative z-9">
          <Footer />
        </div>
      </body>
    </html>
  );
}