import { Kanit } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import Navigation from "./shared/navigation";
import Footer from "./shared/footer";
import DemoOverlay from "./shared/demo";
config.autoAddCss = false;

const font = Kanit({ subsets: ["latin"], weight: ["100", "300", "500"] });

export const metadata = {
  title: "DEMO - NRG Refresh",
  description: "Demo site for NRG Refresh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
      <DemoOverlay />
        <Link href={"#main"} className="absolute top-0 -mt-20">
          Skip to Main Content
        </Link>
        <Navigation />
        <main
          id="main"
          className="mx-auto w-full flex flex-col justify-center bg-black text-white min-h-full flex-grow mt-12"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
