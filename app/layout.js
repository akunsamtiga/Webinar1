import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webinar AI: Inovasi Kecerdasan Buatan dalam Dunia Bisnis",
  description: "Temukan bagaimana AI merevolusi industri dan strategi bisnis global. Daftar sekarang untuk webinar eksklusif ini!",
  keywords: "AI, Artificial Intelligence, Webinar AI, Machine Learning, Data Science, Kecerdasan Buatan, Teknologi AI",
  authors: [{ name: "Tim Webinar AI", url: "https://webinarai.com" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://webinarai.com",
  },
  openGraph: {
    title: "Webinar AI: Inovasi Kecerdasan Buatan dalam Dunia Bisnis",
    description: "Pelajari bagaimana kecerdasan buatan mengubah lanskap bisnis. Daftar sekarang!",
    url: "https://webinarai.com",
    siteName: "Webinar AI",
    images: [
      {
        url: "https://webinarai.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webinar AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinar AI: Inovasi Kecerdasan Buatan dalam Dunia Bisnis",
    description: "Pelajari bagaimana AI mengubah industri dan strategi bisnis global.",
    site: "@WebinarAI",
    creator: "@WebinarAI",
    images: ["https://webinarai.com/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#007bff" />
        <meta name="author" content="Tim Webinar AI" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
