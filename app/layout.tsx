import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mintwell — Plan Smart. Live Well.",
  description: "Generate instant financial plans that build trust and win clients."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Font Awesome (icons) */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          defer
        />
      </head>
      <body className="bg-mintwell-light">{children}</body>
    </html>
  );
}
