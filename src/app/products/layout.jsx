import { Inter } from "next/font/google";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PanWines Products",
  description: "PanWines App Created By RYO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
