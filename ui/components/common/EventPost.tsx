import Image from 'next/image';
const BlogPost = ({
  post,
  extraStyles,
}: {
  post: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
  };
  extraStyles?: string;
}) => (
  <li
    className={`w-full lg:w-1/2  xl:w-1/3 flex-shrink-0 flex items-center px-2 sm:px-32 lg:px-8 xl:px-4 ${extraStyles}`}
  >
    <Image
      width={100}
      height={350}
      src={'https://placehold.jp/100x350.png'}
      alt={post.title + 'blogpost'}
    ></Image>
    <div className="bg-white text-vina-blue-dark h-full relative flex flex-col justify-between p-4 pt-24 items-end">
      <span className="p-2 font-semibold bg-vina-orange-medium absolute top-4 -left-1/4 sm:w-2/3 text-center flex flex-col">
        28 de noviembre
        <span className="text-xs font-normal">10:00 hrs / Valle de Bravo</span>
      </span>
      <h2 className="text-center font-semibold w-full">
        Encabezado de la reunión
      </h2>
      <p className="text-justify">
        Lorem ipsum dolor sit, amet conse ctetur adipis icing elit. Iusto saep
        eamet conse tetur adipi sicing elit. Iusto saepe
      </p>
      <button className="btn-primary">Ver más</button>
    </div>
  </li>
);

export default BlogPost;
