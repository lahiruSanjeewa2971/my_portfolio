import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Lahiru Sanjeewa | Full-stack Software Engineer",
  description: "Portfolio of Lahiru Sanjeewa - Full-stack Software Engineer specializing in React, React Native, Next.js, and Node.js. Building scalable web and mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />

        <StairTransition/>
        
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
