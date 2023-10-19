/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

function ServiceCard({ service }: any) {
  return (
    <div>
      <div className="flex-col flex max-w-full grid-cols-1 gap-4 border border-solid border-[#dfdfdf] bg-white p-0 text-black max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-md h-[500px]">
        <img
          width={400}
          height={300}
          src={service?.service?.imageUrl}
          alt=""
          className="inline-block w-full object-cover h-60"
        />
        <div className="w-full px-6 py-4">
          <span className="text-xs font-semibold uppercase bg-hcOrange-base px-2 py-1  text-white">
            {service?.service?.serviceCategory?.categoryName}
          </span>
          <div className="text-xl font-semibold mb-4 mt-4">
            {service?.serviceName}
          </div>
          {/* <p className="text-[#636262] mb-5 md:mb-6 lg:mb-8">
            {service?.service?.description}
          </p> */}

          <p className="text-teal-700 font-bold">Price: {service?.price} BDT</p>
        </div>
        <div className="mt-auto">
          <Link
            href={`/book-service/${service?.id}`}
            className="flex-row flex max-w-full grid-cols-2 items-center justify-center bg-teal-700 py-4 text-center font-semibold text-white px-8"
          >
            <div className="mr-6 font-bold">Book Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
