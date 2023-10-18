'use client';

import type { CalendarProps } from 'antd';
import { Calendar } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import Slots from './Slots';

type pro = {
  setDate: React.Dispatch<React.SetStateAction<string>>;
  slots: any;
  data: any;
  date: string;
};

/* eslint-disable @next/next/no-img-element */
// @ts-ignore
function DatePicker({ setDate, slots, data, date, refetch }: pro) {
  const [val, setval] = useState(date);
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    const res = value.format('YYYY-MM-DD');
  };

  const onSelect = (newValue: Dayjs) => {
    refetch();
    setDate(newValue.format('YYYY-MM-DD'));
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
                <Calendar
                  fullscreen={false}
                  onPanelChange={onPanelChange}
                  onSelect={onSelect}
                />
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
          {slots?.length === 0
            ? 'No slot is availavle for booking, please select another date'
            : `Available Slots for your selected data: ${date}`}
        </h2>
        <Slots slots={slots} data={data} date={date} />
      </div>
    </section>
  );
}

export default DatePicker;
