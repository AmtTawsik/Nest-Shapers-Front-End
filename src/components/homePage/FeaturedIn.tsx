import Image from 'next/image';

function FeaturedIn() {
  return (
    <section className="bg-teal-50 py-8 lg:py-12 px-12" id="feature">
      <div className="container">
        <h2 className="text-sm text-teal-700 uppercase font-semibold text-center mb-8">
          We featured in
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/5 p-4 flex justify-center">
            <Image
              src="https://i.ibb.co/RQBtDsv/techcrunch.png"
              alt="Techcrunch logo"
              width={110}
              height={110}
              className="filter brightness-0 opacity-50 text-center"
            />
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/5 p-4 flex justify-center">
            <Image
              src="https://i.ibb.co/QDXCfsT/business-insider.png"
              alt="Business Insider logo"
              width={110}
              height={110}
              className="filter brightness-0 opacity-50"
            />
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/5 p-4 flex justify-center">
            <Image
              src="https://i.ibb.co/zGhFX0K/the-new-york-times.png"
              alt="New York Times logo"
              width={110}
              height={110}
              className="filter brightness-0 opacity-50"
            />
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/5 p-4 flex justify-center">
            <Image
              src="https://i.ibb.co/MRXJBF8/forbes.png"
              alt="Forbes logo"
              width={110}
              height={110}
              className="filter brightness-0 opacity-50"
            />
          </div>
          <div className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/5 p-4 flex justify-center">
            <Image
              src="https://i.ibb.co/wB2Zqvs/usa-today.png"
              alt="USA Today logo"
              width={110}
              height={110}
              className="filter brightness-0 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
