import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";

import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/universal/side-bar";
import { cn } from "@/lib/utils";
import { UniversalProvider } from "@/context/UniversalContext";
import SideBarMobile from "@/components/universal/side-bar-mobile";

const Roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delfim Celestino - Desenvolvedor Fullstack",
  description: "Desenvolvedor",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          Roboto.className,
          "relative flex flex-col md:flex-row overflow-x-hidden"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <UniversalProvider>
            <SideBar />
            <SideBarMobile />
            <main className="relative w-full mt-10 md:mt-0 md:ml-72">
              <NextTopLoader />

              {children}
            </main>
          </UniversalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
