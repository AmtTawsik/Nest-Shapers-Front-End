import Image from 'next/image';

function CategoryCard() {
  return (
    <div>
      <div className="relative flex max-w-full flex-col items-center justify-center object-cover text-black">
        <Image
          width={300}
          height={300}
          src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
          alt=""
          className="inline-block h-[300px] w-full object-cover"
        />
        <div className="absolute flex flex-col items-center justify-center bg-white px-8 py-4 text-center rounded-sm">
          <p className="font-medium text-sm sm:text-xl">Project Name</p>
          <p className="max-[479px]:text-sm">Microsoft</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
