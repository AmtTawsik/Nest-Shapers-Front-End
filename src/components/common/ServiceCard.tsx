import Image from 'next/image';

function ServiceCard() {
  return (
    <div>
      <div className="flex-col flex max-w-full grid-cols-1 gap-4 border border-solid border-[#dfdfdf] bg-white p-0 text-black max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-md">
        <Image
          width={400}
          height={300}
          src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
          alt=""
          className="inline-block w-full object-cover h-60"
        />
        <div className="w-full px-6 py-4">
          <span className="text-xs font-semibold uppercase bg-hcOrange-base px-2 py-1  text-white">
            Gardening
          </span>
          <div className="text-xl font-semibold mb-4 mt-4">
            The latest news with Flowspark
          </div>
          <p className="text-[#636262] mb-5 md:mb-6 lg:mb-8">
            Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
            luctus venenatis elit ut aliquam, purus sit amet luctus venenatis
          </p>
        </div>
        <div>
          <a
            href="#"
            className="flex-row flex max-w-full grid-cols-2 items-center justify-center bg-teal-700 py-4 text-center font-semibold text-white px-8"
          >
            <div className="mr-6 font-bold">Book Now</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
