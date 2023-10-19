import CategoryCard from '../common/CategoryCard';

// @ts-ignore
function Categories({ categories }) {
  return (
    <section className="block">
      <div className="py-24 md:py-24 lg:pb-32 lg:pt-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="">
          <div className="text-center">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Explore Our House Servicing Specialties
            </h2>
            <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-1 lg:mb-16">
              <p className="text-hcOrange-base font-semibold">
                Tailored Services to Elevate Every Aspect of Your Home
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
            {/* @ts-ignore */}
            {categories?.map((category) => (
              <CategoryCard key={category?.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
