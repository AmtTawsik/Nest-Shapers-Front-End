import Link from 'next/link';
import ServiceCard from '../common/ServiceCard';

function Services({ featuredServices }: { featuredServices: any }) {
  return (
    <div className="bg-teal-50">
      <div className="py-24 md:py-32 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10 bg-teal-50">
        <div className="flex-col flex items-center">
          <div className="max-w-[800px] text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Tailored Solutions for Every Corner for your Home
            </h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-hcOrange-base font-semibold">
                Discover Expert Services for a Perfect Home Experience
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
            {/* @ts-ignore */}
            {featuredServices?.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <Link
            href="/available-services"
            className="flex-row flex max-w-full grid-cols-2 items-center justify-center bg-hcOrange-base py-4 text-center font-semibold text-white px-8"
          >
            <div className="mr-6 font-bold">View More</div>
            <div className="h-4 w-4 flex-none">
              <svg
                fill="currentColor"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
