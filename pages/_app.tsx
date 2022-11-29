import { Poppins } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Header from 'ui/layout/Header/Header';
import { LanguageContext } from 'utils/contexts';
import '../styles/globals.css';
import Footer from '../ui/layout/Footer';
const poppins = Poppins({
  weight: '500',
  subsets: ['latin-ext'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [language, languageSet] = useState('ES');
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Header lang={language} langChange={languageSet} />
      <main>
        <LanguageContext.Provider value={language}>
          <Component {...pageProps} />
        </LanguageContext.Provider>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
