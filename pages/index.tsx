import {
  BlogPost,
  Carousel,
  EventPost,
  HomeHero,
  MisionYVision,
  Valores,
} from 'Components';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { TEMPblogPosts } from 'ui/components/Home/constants';
import crossBg from '../public/cross-bg.png';

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
