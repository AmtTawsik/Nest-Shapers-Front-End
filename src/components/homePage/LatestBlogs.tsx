import BlogCard from '../common/BlogCard';

// @ts-ignore
function LatestBlogs({ blogs }) {
  return (
    <div className="bg-teal-50">
      <section className="block">
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-center">
            <div className="max-w-[800px] text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="font-bold text-3xl md:text-5xl text-teal-950">
                Insights and Inspiration: Our Home Servicing Blog
              </h2>
              <div className="mx-auto mt-4 max-w-[528px]">
                <p className="text-hcOrange-base max-[479px]:text-sm">
                  Explore Expert Tips, Trends, and Stories to Elevate Your
                  Living Spaces
                </p>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-8 md:mb-12 lg:mb-16">
              {/* @ts-ignore */}
              {blogs?.map((blog) => (
                <BlogCard key={blog?.id} blog={blog} />
              ))}
            </div>
            <a
              href="#"
              className="inline-block items-center bg-teal-700 px-6 py-3 text-center font-semibold text-white"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestBlogs;
