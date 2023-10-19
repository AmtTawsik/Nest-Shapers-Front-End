import Image from 'next/image';
import Link from 'next/link';

function Overview() {
  return (
    <div>
      <section className="block bg-white">
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <div className="text-center">
              <h1 className="font-bold mb-8 text-4xl md:text-6xl text-teal-950">
                Your Home, Our Priority: A Holistic Overview
              </h1>
              <div className="text-center mb-5 md:mb-6 lg:mb-8">
                <p className="text-[#636262] text-sm sm:text-xl">
                  Crafting Unmatched House Servicing Experiences Tailored to
                  you. Discover a world of excellence in house servicing - where
                  quality meets care, and your house well-being is our ultimate
                  commitment. From pristine gardens to sturdy roofs, we
                  transform spaces into havens. Embark a journey with us where
                  attention to deatail meets unwavering dedication. Our
                  comprehensive house servicing solutions redefine excellence,
                  ensuring your home thrives in beauty, functionality and
                  lasting quality.
                </p>
              </div>
              <div className="flex items-stretch justify-center">
                <Link
                  href="/available-services"
                  className="px-8 py-4 rounded-md text-white text-lg bg-hcOrange-base"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 md:gap-4 mt-16 sm:mt-24">
            <div className="flex items-center justify-center">
              <Image
                width={120}
                height={120}
                src="https://i.ibb.co/RQBtDsv/techcrunch.png"
                alt=""
                className="inline-block filter brightness-0 opacity-50"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                width={100}
                height={100}
                src="https://i.ibb.co/QDXCfsT/business-insider.png"
                alt=""
                className="inline-block filter brightness-0 opacity-50"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                width={100}
                height={100}
                src="https://i.ibb.co/MRXJBF8/forbes.png"
                alt=""
                className="inline-block filter brightness-0 opacity-50"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                width={100}
                height={100}
                src="https://i.ibb.co/zGhFX0K/the-new-york-times.png"
                alt=""
                className="inline-block filter brightness-0 opacity-50"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                width={100}
                height={100}
                src="https://i.ibb.co/wB2Zqvs/usa-today.png"
                alt=""
                className="inline-block filter brightness-0 opacity-50"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview;
