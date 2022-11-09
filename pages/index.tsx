import { BlogPost, Carousel, Container } from 'Components';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
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
        <div className="section theme-primary">
          {!errors.blog && (
            <Carousel secondStep={8}>
              {posts.map((post) => (
                <BlogPost post={post} key={post.id} extraStyles="" />
              ))}
            </Carousel>
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
      </div>
    </>
  );
}
export async function getStaticProps() {
  let blogPosts = null;
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
        errorsProp: { blog: !blogPosts },
      },
    };
  }
}
