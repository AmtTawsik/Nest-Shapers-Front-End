'use client';

import AddReview from '@/components/bookingPage/AddReview';
import AllReviews from '@/components/bookingPage/AllReviews';
/* eslint-disable jsx-a11y/alt-text */

import DatePicker from '@/components/bookingPage/DatePicker';
import HCLoading from '@/components/ui/Loading/HCLoading';
import { useRemainingServiceQuery } from '@/redux/api/availableServiceApi';
import { isLoggedIn } from '@/services/auth.service';
import { getTodaysDate } from '@/utils/getTodaysDate';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
type IDProps = {
  params: any;
};

function BookServiceSinglePage({ params }: IDProps) {
  const { serviceId } = params;
  const isUserLoggedIn = isLoggedIn();
  const [date, setDate] = useState(() => getTodaysDate());

  const paramData = {
    id: serviceId,
    date: date,
  };

  const { data, isLoading, refetch } = useRemainingServiceQuery(paramData);

  if (isLoading) {
    return <HCLoading />;
  }

  const { serviceName, service, price, slots } = data?.data;

  return (
    <div className="bg-white">
      <div className="pb-24 md:pb-32 lg:pb-32 mx-auto w-full max-w-7xl px-5 md:px-10 pt-12 bg-white">
        <div className="">
          <div className="max-w-[800px] text-center mx-auto">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              {serviceName || 'Service Name'}
            </h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-hcOrange-base text-3xl font-semibold mb-4">
                Category: {service?.serviceCategory?.categoryName}
              </p>
              <p className="text-teal-700 text-3xl font-semibold">
                Price: {price} BDT
              </p>
            </div>
          </div>

          <DatePicker
            setDate={setDate}
            date={date}
            slots={slots}
            data={data}
            // @ts-ignore
            refetch={refetch}
          />
          <div>
            <h2 className="text-xl text-teal-950 mb-4 font-bold">
              Service Description:
            </h2>
            <p>{service?.description}</p>
          </div>
          {/* <div className="mt-16">
            <BookForm />
          </div> */}
          <div className="mt-8">
            <h2 className="text-xl text-teal-950 mb-4 font-bold">
              Customer Reviews:
            </h2>
            {isUserLoggedIn && <AddReview serviceId={serviceId} />}
            <AllReviews serviceId={serviceId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookServiceSinglePage;
