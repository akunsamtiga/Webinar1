import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap' 
});

export const metadata = {
  title: 'Webinar | Transformasi Digital untuk Bisnis',
  description: 'Pelajari strategi terbaru implementasi AI dalam bisnis dari para ahli industri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
