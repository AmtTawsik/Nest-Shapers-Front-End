import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
// @ts-ignore
function BlogCard({ blog }) {
  return (
    <div>
      {' '}
      <Link
        href={blog?.blogLink}
        className="flex max-w-full grid-cols-1 flex-col gap-4 bg-white p-4 text-black max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-md"
      >
        <img
          src={blog?.imageUrl}
          alt=""
          className="inline-block w-full object-cover h-60"
        />
        <div className="flex w-full flex-col items-start justify-start px-0 py-4">
          <div className="bg-teal-100 px-2 py-1.5 rounded-md mb-4">
            <p className="font-semibold text-teal-700 text-sm sm:text-sm">
              {blog?.serviceCategory?.categoryName}
            </p>
          </div>
          <div className="font-bold mb-4 text-xl md:text-2xl">
            {blog?.title}
          </div>
          <div className="flex flex-col items-start">
            <div className="flex max-[991px]:flex-col items-start lg:items-center">
              <p className="text-[#636262] text-sm sm:text-sm">
                {blog?.authorName}
              </p>
              <p className="ml-2 mr-2 text-[#636262] max-[991px]:hidden text-sm sm:text-sm">
                -
              </p>
              <p className="text-[#636262] text-sm sm:text-sm">6 mins read</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
