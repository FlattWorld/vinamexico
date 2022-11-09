import { BlogPost, Carousel, Container } from 'Components';
import Head from 'next/head';
import Image from 'next/image';

import { blogPosts } from 'ui/components/Home/constants';
import jesusBg from '../public/jesus-bg.jpg';

const HomeHero = () => (
  <div className="section h-[75vh">
    <Image
      src={jesusBg}
      alt="background"
      className="h-[75vh] object-cover object-bottom"
      priority={true}
      placeholder="blur"
    ></Image>
    <Container extraStyles="flex justify-end absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center max-w-md w-full center text-white  text-center">
        <h1 className="text-5xl">Texto bien cristiano</h1>
        <p>Texto bien cristiano pero mas chiquito</p>
        <a
          className="btn-primary mt-8 mr-8 self-end border-vina-yellow-dark border"
          href="#contact"
          aria-label="contact link"
        >
          Contacto
        </a>
      </div>
    </Container>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Viña México</title>
        <meta name="description" content="Viña México" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="section flex-col">
        <HomeHero />
        <div className="section theme-primary">
          <Carousel secondStep={8}>
            {blogPosts.map((post) => (
              <BlogPost post={post} key={post.id} extraStyles="" />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
