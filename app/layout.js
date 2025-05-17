import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap' 
});

export const metadata = {
  title: 'Zychrome',
  description: 'Optimalkan kekuasaan skill kamu melalui webinar interaktif dan inspiratif dari para ahli terbaik.',
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
