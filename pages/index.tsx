import { Container } from 'Components';
import Head from 'next/head';
import Image from 'next/image';
import jesusBg from '../public/jesus-bg.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Viña México</title>
        <meta name="description" content="Viña México" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="section">
        <div className="section relative">
          <Image
            src={jesusBg}
            alt="background"
            className="h-[75vh] object-cover"
          ></Image>
          <Container extraStyles="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
            .
          </Container>
        </div>
      </div>
    </>
  );
}
