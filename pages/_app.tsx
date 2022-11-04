import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Footer, Header } from '../ui/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
