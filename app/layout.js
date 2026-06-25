import { GoogleTagManager } from "@next/third-parties/google";
import { Exo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";

import "./css/card.scss";
import "./css/globals.scss";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});

export const metadata = {
  title: "Portfolio of Ragul Suresh - Software Developer",
  description:
    "Portfolio showcasing my experience, skills, projects and education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo.className} bg-[#0d1224] text-white`}
        suppressHydrationWarning
      >
        <ToastContainer />

        <Navbar />

        <main className="pt-20 min-h-screen">
          <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            {children}
          </div>
        </main>

        <Footer />
        <ScrollToTop />

        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}