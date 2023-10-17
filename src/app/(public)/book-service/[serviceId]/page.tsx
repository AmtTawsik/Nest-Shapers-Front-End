/* eslint-disable jsx-a11y/alt-text */

import BookForm from '@/components/bookingPage/BookForm';
import DatePicker from '@/components/bookingPage/DatePicker';

/* eslint-disable @next/next/no-img-element */
function BookServiceSinglePage() {
  return (
    <div className="bg-white">
      <div className="pb-24 md:pb-32 lg:pb-32 mx-auto w-full max-w-7xl px-5 md:px-10 pt-12 bg-white">
        <div className="flex-col flex items-center">
          <div className="max-w-[800px] text-center">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Home Cleaning
            </h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-hcOrange-base text-3xl font-semibold mb-4">
                Category: Cleaning
              </p>
              <p className="text-teal-700 text-3xl font-semibold">
                Price: 1500 BDT
              </p>
            </div>
          </div>

          <DatePicker />
          <div>
            <h2 className="text-xl text-teal-950 mb-4 font-bold">
              Service Description:
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
              accusamus! Eos minus tenetur dolor voluptatibus porro cum
              consequuntur temporibus rem nisi ullam et error nobis ratione
              totam cupiditate, laudantium veniam, iure, facilis corrupti unde
              illo! Quia, velit minima. Nesciunt nam ipsa blanditiis doloremque
              voluptatum itaque dignissimos, dolores ex eveniet saepe distinctio
              autem consectetur rem? Facere optio cupiditate nihil obcaecati,
              vero eos molestias, voluptatum voluptatem sed architecto quis
              commodi eveniet voluptates soluta magni consequuntur consequatur,
              odio sequi nobis tempore ea. Quo itaque consequuntur deserunt
              consectetur, dolorem voluptatum libero accusantium facere alias
              mollitia quaerat dicta blanditiis, aliquid eum animi a distinctio
              ratione.
            </p>
          </div>
          <div className="mt-16">
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookServiceSinglePage;
