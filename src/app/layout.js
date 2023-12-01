import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KOWDEEN",
  description: "Tempat Cari Kerja Terpercaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
