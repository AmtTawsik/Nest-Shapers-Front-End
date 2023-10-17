'use client';

import type { Dayjs } from 'dayjs';

import type { CalendarProps } from 'antd';
import { Calendar } from 'antd';
import Slots from './Slots';

/* eslint-disable @next/next/no-img-element */
function DatePicker() {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <section className="block">
      <div className="pb-16 md:pb-16 lg:pb-16 pt-24 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex items-stretch max-[991px]:min-h-[auto] max-[991px]:w-full max-[991px]:flex-col grid-cols-1 lg:grid-cols-[65%_30%] gap-4 lg:gap-4">
          <div className="max-[991px]:max-w-[720px] bg-teal-700 text-center p-8">
            <h2 className="font-bold mb-4 text-xl md:text-2xl text-white">
              Select Your Booking Date
            </h2>
            <div className="max-w-[480px] mb-6 md:mb-10 lg:mb-12 mx-auto">
              <div className="w-ful">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://i.ibb.co/yRqYfJZ/pexels-andrea-piacquadio-3771111.jpg"
              alt=""
              className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-center mb-12 text-teal-700 text-2xl font-bold">
          Available Slots
        </h2>
        <Slots />
      </div>
    </section>
  );
}

export default DatePicker;
