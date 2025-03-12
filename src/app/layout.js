import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "trevoDB",
  description: "Turkey Reovirus Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} min-h-screen flex flex-col font-montserrat`}>
        <NavBar />
        <main className="flex-grow bg-gradient-to-tr from-blue-300/20 to-purple-300/20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
