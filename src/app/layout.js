import { Inter, } from "next/font/google";
import "./globals.scss";
import Header from "@/ui/header/Header";
import Footer from "@/ui/footer/Footer";
import IndexContext from "@/context/IndexContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Franklyn HNG-Task2",
  description: "This website if my second task for the HNG internship program",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <IndexContext>
          <div className="summer-sale">
            <p>Summer Sales is Ongoing! Get 30% off each item this summer.</p>
          </div>
          {children}
          <Footer />
        </IndexContext>
      </body>
    </html>
  );
}
