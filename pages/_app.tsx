import { Poppins } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import Header from 'ui/layout/Header/Header';
import '../styles/globals.css';
import Footer from '../ui/layout/Footer';
const poppins = Poppins({
  weight: '500',
  subsets: ['latin-ext'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
