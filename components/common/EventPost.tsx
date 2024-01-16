import Image from 'next/image';
import crosses from '@/public/crosses.jpg'
import { Button } from '@/components'
const BlogPost = ({
  post,
  extraStyles,
}: {
  post: {
    _id: string;
    title: string;
    description: string;
    thumbnail: string;
    time?: string;
    place?: string;
    date: string;
    onClick: any
  };
  extraStyles?: string;
}) => (
  <li
    className={`w-full lg:w-1/2  xl:w-1/3 flex-shrink-0 flex flex-col items-center px-2 sm:px-32 lg:px-8 xl:px-4 ${extraStyles}`}
  >
    <Image className='w-full h-24 object-cover'
      src={post.thumbnail || crosses}
      alt={post.title + 'blogpost'}
    />
    <div className="bg-white text-vina-blue-dark h-full relative flex flex-col gap-4 p-4 md:pt-24 pt-20 items-end">
      <span className="py-2 px-4 font-semibold bg-vina-orange-medium absolute top-4 -right-10 text-center flex flex-col">
        {post.date}
        <span className="text-xs font-normal">{`${post.time} / ${post.place}`}</span>
      </span>
      <h2 className="text-center font-semibold w-full text-xs md:text-base">{post.title}</h2>
      <p className="text-justify overflow-elipsis text-ellipsis max-h-36 leading-tight my-4">
        {post.description}
      </p>
      {post.onClick && <Button onClick={post.onClick} >Ver más</Button> }
    </div>
  </li>
);

export default BlogPost;
