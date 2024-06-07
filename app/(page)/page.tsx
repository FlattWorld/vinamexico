"use client"
import {
  BlogPost,
  Carousel,
  EventPost,
  HomeHero,
  MisionYVision,
  Valores,
} from '@/components';

import Head from 'next/head';
import Link from 'next/link';
import crossBg from '@/public/cross-bg.png';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const eventos = [
    {
      id: 1,
      title: 'Conferencia Nacional Viña 2024',
      description:
        'Estimados Pastores y Líderes. Estamos tan emocionados por lo que Dios ha preparado para el movimiento Viña este siguiente año.',
      place: 'Mexicali B.C.',
      date: 'Octubre 16-18 2024',
      time: '',
      thumbnail: '',
      onClick: () => router.push('/eventos/65a61aa345465a31ce8b201f')
    },
  ];

  const posts:any = []
  return (
    <>
      <main className="section flex-col">
        <HomeHero />
        <div className="section theme-primary flex-col pb-16">
              <Carousel title="Mensaje de Dios para ti" secondStep={8}>
                {posts.map((post:any) => (
                  <BlogPost post={post} key={post._id} extraStyles="" />
                ))}
              </Carousel>
              <Link className="underline transform translate-y-8" href="/blog">
                Ver todos
              </Link>
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
            {eventos.map((post:any) => (
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
      </main>
    </>
  );
}
