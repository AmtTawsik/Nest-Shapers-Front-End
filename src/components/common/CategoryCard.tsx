/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

// @ts-ignore
function CategoryCard({ category }) {
  return (
    <Link href={`/category/${category?.id}`} className='border rounded-lg'>
      <div className="relative flex max-w-full flex-col items-center justify-center object-cover text-black">
        <img
          width={300}
          height={300}
          src={category?.categoryImage}
          alt=""
          className="inline-block h-[300px] w-full object-cover rounded-lg"
        />
      </div>
      <p className="font-bold text-xl md:text-3xl text-center py-2 text-hcOrange">
        {category?.categoryName}
      </p>
    </Link>
  );
}

export default CategoryCard;
