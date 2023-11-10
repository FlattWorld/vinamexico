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

export default function Home() {

  const eventos = [
    {
      id: 0,
      title: 'Reunión Anual de Pastores y Plantadores de la Viña México',
      description:
        'Queridos hermanos, amigos y consiervos. En esta reunión queremos tener tiempo de adoración juntos, fortalecer lazos de hermandad y amistad, mirar juntos hacia el futuro, reafirmar nuestra identidad y valores como movimiento y seguir construyendo juntos.',
      place: 'Mazatlán',
      date: 'Nov 15-17 2023',
      time: '',
      thumbnail: '',
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
