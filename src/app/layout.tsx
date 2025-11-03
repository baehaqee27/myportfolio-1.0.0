// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. IMPORT ThemeProvider
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Ganti 'title' jadi objek
  title: {
    default: "Mattrizz - Web Developer", // Judul Halaman Utama
    template: "%s | Mattrizz", // Template untuk halaman lain
  },
  // 2. Ganti 'description'
  description:
    "Portofolio pribadi Mattrizz (Ahmad Rizal Baehaqi), seorang Web Developer yang hobi bikin aplikasi 'uhuy' pakai Next.js.",

  verification: {
    google: "UwNfNzT2K_X0ZDX6GkLPTFnIvVe9DJfUNcjUSj2IMqA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning WAJIB untuk next-themes */}
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        {/* 2. BUNGKUS SEMUANYA DENGAN ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
