import { Container } from '@/components';
import Image from 'next/image';
import jesusBg from 'public/jesus-bg.jpg';

const HomeHero = () => (
  <div className="section h-[75vh]">
    <Image
      src={jesusBg}
      alt="background"
      className="h-[75vh] object-cover object-bottom"
      priority={true}
      placeholder="blur"
    />
    <Container extraStyles="flex justify-end absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center max-w-md w-full center text-white  text-center">
        <h1 className="text-5xl">La Viña México</h1>
        <p>Construyendo Juntos un nuevo futuro</p>
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

export default HomeHero;
