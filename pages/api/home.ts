// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

const blogPosts = [
  {
    id: 1,
    title: 'Blog cristiano de cosas cristianas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta quo accusamus odit error ea? Nam natus similique, quam, magni provident aut incidunt officia odit iusto minus, eaque beatae iure.',
    thumbnail:
      'https://absolutewellnesscenters.com/wp-content/uploads/2020/06/350px-X-350px-Placeholder-Image-.jpg',
  },
  {
    id: 2,
    title: 'Blog cristiano de cosas cristianas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta quo accusamus odit error ea? Nam natus similique, quam, magni provident aut incidunt officia odit iusto minus, eaque beatae iure.',
    thumbnail:
      'https://absolutewellnesscenters.com/wp-content/uploads/2020/06/350px-X-350px-Placeholder-Image-.jpg',
  },
  {
    id: 3,
    title: 'Blog cristiano de cosas cristianas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta quo accusamus odit error ea? Nam natus similique, quam, magni provident aut incidunt officia odit iusto minus, eaque beatae iure.',
    thumbnail:
      'https://absolutewellnesscenters.com/wp-content/uploads/2020/06/350px-X-350px-Placeholder-Image-.jpg',
  },
  {
    id: 4,
    title: 'Blog cristiano de cosas cristianas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta quo accusamus odit error ea? Nam natus similique, quam, magni provident aut incidunt officia odit iusto minus, eaque beatae iure.',
    thumbnail:
      'https://absolutewellnesscenters.com/wp-content/uploads/2020/06/350px-X-350px-Placeholder-Image-.jpg',
  },
  {
    id: 5,
    title: 'Blog cristiano de cosas cristianas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta quo accusamus odit error ea? Nam natus similique, quam, magni provident aut incidunt officia odit iusto minus, eaque beatae iure.',
    thumbnail:
      'https://absolutewellnesscenters.com/wp-content/uploads/2020/06/350px-X-350px-Placeholder-Image-.jpg',
  },
  {
    id: 6,
    title: 'Blog cristiano de cosas cristianas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium soluta quo accusamus odit error ea? Nam natus similique, quam, magni provident aut incidunt officia odit iusto minus, eaque beatae iure.',
    thumbnail:
      'https://absolutewellnesscenters.com/wp-content/uploads/2020/06/350px-X-350px-Placeholder-Image-.jpg',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(blogPosts);
}
