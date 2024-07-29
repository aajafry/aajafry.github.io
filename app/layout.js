import ThemeProvider from "@/components/atoms/ThemeProvider";
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher";
import Sidebar from "@/components/organisms/Sidebar";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  styles: "normal",
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "aajafry",
  description: "this is a personal protfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-slate-100 dark:bg-slate-800 ${montserrat.className} ${poppins.className}`}
        // suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <ThemeSwitcher />
          <main 
            className="flex min-h-screen text-black dark:text-white"
          >
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
