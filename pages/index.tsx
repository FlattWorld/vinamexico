import { BlogPost, Carousel, Container, EventPost } from 'Components';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { TEMPblogPosts } from 'ui/components/Home/constants';
import { LanguageContext } from 'utils/contexts';

import { MisionAndVision, valores } from 'utils/staticTexts';
import crossBg from '../public/cross-bg.png';
import hands from '../public/hands.svg';
import hands2 from '../public/hands2.svg';
import jesusBg from '../public/jesus-bg.jpg';

type langType = 'EN' | 'ES';

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

const MisionYVision = () => {
  const lang: langType = useContext(LanguageContext) as langType;
  return (
    <div className="flex flex-col items-center">
      <h2 className="theme-title">Nuestra visión y misión</h2>
      <div className="flex gap-8 w-10/12">
        <Image src={hands} alt="hands-praying" className="w-1/3 border" />
        <div className="w-2/3 flex flex-col gap-8 justify-center">
          <p>
            <span>{MisionAndVision[lang][0]}</span>
            <span className="keyword">{MisionAndVision[lang][1]}</span>
            <span>{MisionAndVision[lang][2]}</span>
          </p>
          <p>{MisionAndVision[lang][3]}</p>
        </div>
      </div>
    </div>
  );
};

const Valores = () => {
  const lang: langType = useContext(LanguageContext) as langType;
  return (
    <div className="flex flex-col items-center">
      <h2 className="theme-title">Valores de la Viña</h2>
      <div className="flex flex-row-reverse gap-8 w-10/12">
        <Image src={hands2} alt="hands-praying" className="w-1/3 border" />
        <div className="w-2/3 flex flex-col gap-8 justify-center text-vina-yellow-medium">
          <h3>
            {valores[lang].title[0]}
            <span className="keyword">{valores[lang].title[1]}</span>
            {valores[lang].title[2]}
          </h3>
          <ul className="flex flex-col gap-4 list-disc">
            {valores[lang].texts.map(([value, description]) => (
              <li key={value} className="">
                <span className="keyword">{value}</span>
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default function Home({
  blogPosts,
  errorsProp,
}: {
  blogPosts: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
  }[];
  errorsProp: { blog: boolean };
}) {
  const [posts, postsSet] = useState(blogPosts);
  const [errors, errorsSet] = useState(errorsProp);
  const retryBlogPosts = async () => {
    try {
      const resBlogs = await fetch('http://localhost:3000/api/home');
      const postData = await resBlogs.json();
      postsSet(postData);
      errorsSet({ ...errors, blog: false });
    } catch (_e) {
      //TEMPORAL CHANGES TO MOCK POSTS
      postsSet(TEMPblogPosts);
      errorsSet({ ...errors, blog: false });
      return;
    }
  };
  return (
    <>
      <Head>
        <title>Viña México</title>
        <meta name="description" content="Viña México" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="section flex-col">
        <HomeHero />
        <div className="section theme-primary flex-col pb-16">
          {!errors.blog && (
            <>
              <Carousel title="Mensaje de Dios para ti" secondStep={8}>
                {posts.map((post) => (
                  <BlogPost post={post} key={post.id} extraStyles="" />
                ))}
              </Carousel>
              <Link className="underline transform translate-y-8" href="/blog">
                Ver todos
              </Link>
            </>
          )}
          {errors.blog && (
            <div className="flex flex-col w-full items-center">
              <h1 className="text-5xl my-16">Failed to load blogPosts</h1>
              <button
                onClick={() => retryBlogPosts()}
                className="btn-primary px-8"
              >
                Retry
              </button>
            </div>
          )}
        </div>
        <div
          style={{
            background: `url(${crossBg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
          className="section flex-col pb-16 text-vina-yellow-dark"
        >
          <Carousel title="Próximos eventos" secondStep={16}>
            {posts.map((post) => (
              <EventPost post={post} key={post.id} extraStyles="" />
            ))}
          </Carousel>
        </div>
        <div className="section theme-primary pb-16">
          <div className="container">
            <MisionYVision />
          </div>
        </div>
        <div className="section theme-secondary pb-16">
          <div className="container">
            <Valores />
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  let blogPosts = [];
  try {
    const resBlogs = await fetch('http://localhost:3000/api/home');
    blogPosts = await resBlogs.json();
    return {
      props: { blogPosts, errorsProp: { blog: !blogPosts } },
    };
  } catch (e) {
    return {
      props: {
        blogPosts,
        errorsProp: { blog: blogPosts.length === 0 },
      },
    };
  }
}
