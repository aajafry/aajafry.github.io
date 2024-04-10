import ThemeProvider from "@/components/atoms/ThemeProvider";
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher";
import Sidebar from "@/components/organisms/Sidebar";
// import { SidebarProvaider } from "@/src/contexts/SidebarContext";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  // styles: "normal",
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  // display: "swap",
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
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-slate-100 dark:bg-slate-800 ${montserrat.className} ${poppins.className}`}
        // suppressHydrationWarning={true}
      >
        {/* toggle theme-switch icon-button */}
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
        <main className="flex min-h-screen text-black dark:text-white">
          {/* <SidebarProvaider> */}
          <Sidebar />
          {children}
          {/* </SidebarProvaider> */}
        </main>
      </body>
    </html>
  );
}
