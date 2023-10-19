/* eslint-disable react/no-unescaped-entities */

import { useReviewAndRatingsQuery } from '@/redux/api/reviewAndRatingApi';
import { Rate } from 'antd';

/* eslint-disable @next/next/no-img-element */
function AllReviews({ serviceId }: { serviceId: string }) {
  const query: Record<string, any> = {};

  query['serviceId'] = serviceId;

  const { data, isLoading } = useReviewAndRatingsQuery({ ...query });
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl  py-16  md:py-12 lg:py-12">
        <ul className="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
          {/* @ts-ignore */}
          {data?.reviewAndRatings?.map((d) => (
            <li
              key={d?.id}
              className="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10"
            >
              <div className="flex">
                <Rate disabled value={d?.rating} />
              </div>
              <p className="text-[#647084]">{d.review}</p>
              <div className="flex">
                {/* <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png"
                alt=""
                className="mr-4 h-16 w-16"
              /> */}
                <div className="flex flex-col">
                  <h6 className="font-bold">{d?.user?.fullName}</h6>
                  <p className="text-sm text-[#636262]">Customer</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AllReviews;
