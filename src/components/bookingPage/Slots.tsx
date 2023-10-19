import { useAddBookingMutation } from '@/redux/api/bookingApi';
import { getUserInfo, isLoggedIn } from '@/services/auth.service';
import { responseMessage } from '@/utils/responseMessage';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HCModal from '../ui/Modal/HCModal';

/* eslint-disable react/no-unescaped-entities */
type props = {
  slots: any;
  data: any;
  date: string;
};

function Slots({ slots, data: serviceData, date }: props) {
  const [open, setOpen] = useState<boolean>(false);
  const [slotData, setSlotData] = useState<string>('');
  const isUserLoggedIn = isLoggedIn();
  const { role, userId } = getUserInfo() as any;
  const [addBooking, { isLoading }] = useAddBookingMutation();
  const router = useRouter();

  const bookingHandler = async (data: any) => {
    if (isLoading) {
      message.loading('Create Booking');
    }

    try {
      console.log(serviceData);
      const bookingData = {
        date: date,
        userId: userId,
        slotId: data?.id,
        serviceId: serviceData.data?.id,
        paymentMethod: 'cashOnDelivery',
      };
      console.log(bookingData);
      const res = await addBooking(bookingData);

      console.log(res);

      if (res) {
        setOpen(false);

        responseMessage(res, 'Service Booked Successfully');
        if ('data' in res && res.data) {
          router.push('/my-bookings');
        }
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center mx-auto gap-4">
      {slots?.map((slot: any) => (
        <div
          key={slot?.id}
          className="p-6 text-center bg-hcOrange-base rounded-lg text-white"
        >
          <p>Start Time: {slot.startTime}</p>
          {/* <p>Team Name: Apollo</p> */}
          {isUserLoggedIn && role === 'customer' ? (
            <button
              className="text-white bg-teal-700 px-16 py-2 mt-2 rounded-md"
              onClick={() => {
                setOpen(true);
                setSlotData(slot);
              }}
            >
              Book Now
            </button>
          ) : (
            <button
              disabled
              className="text-white bg-teal-700 px-16 py-2 mt-2 rounded-md"
            >
              Login first
            </button>
          )}
        </div>
      ))}

      <HCModal
        title="Book Service"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => bookingHandler(slotData)}
      >
        <p className="my-5">Do you want to book this service?</p>
      </HCModal>
    </div>
  );
}

export default Slots;
