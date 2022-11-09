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
  extraStyles: string;
}) => (
  <li
    className={`w-full lg:w-1/2  xl:w-1/3 flex-shrink-0 flex flex-col items-center ${extraStyles}`}
  >
    <Image
      width={350}
      height={350}
      src={post.thumbnail}
      alt={post.title + 'blogpost'}
    ></Image>
    <span className="text-3xl text-center my-2 theme-title">
      {post.title}
      {post.id}
    </span>
    <p className="max-w-sm">{post.description}</p>
  </li>
);

export default BlogPost;
