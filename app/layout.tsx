import './globals.css';
import LayoutWrapper from './components/LayoutWrapper';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StarsBackground from "./components/StarsBackground";
import logo from "../public/assets/images/ST-Icon.jpg";

export const metadata = {
  title: {
    template: '%s | Solheim Technologies',
    default: "Solheim Technologies | Custom Software Development", // a default is required when creating a template
  },
  description: "Solheim Technologies is a software development company that provides custom software development, web development, and digital marketing solutions.",
  
  metadataBase: new URL('https://solheimtech.com'),
  openGraph: {
    title: "Solheim Technologies",
    description: "Solheim Technologies is a software development company that provides custom software development, web development, and digital marketing solutions.",
    type: 'website',
    locale: 'en_US',
    url: 'https://solheimtech.com',
    siteName: "Solheim Technologies",
    images: [
      {
        url: 'https://solheimtech.com/assets/images/ST-Icon.jpg',
        width: 600,
        height: 600,
        alt: 'Solheim Technologies Logo',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StarsBackground />
        <header className="relative z-10">
          <Header />
          <Navbar />
        </header>
        <div className="relative z-0">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}