import ClientReviewCard from '../common/ClientReviewCard';

/* eslint-disable react/no-unescaped-entities */
function Reviews() {
  return (
    <div>
      <section className="bg-[#FFF1F2]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-26 lg:py-24">
          <h2 className="mx-auto mb-8 mt-6 max-w-3xl text-center text-3xl font-extrabold md:mb-12 md:text-5xl">
            Discover What Our Clients Have to Say About Our House Servicing
            Excellence
          </h2>

          <div className="mb-5 flex justify-center items-center lg:mb-8">
            <ClientReviewCard />
          </div>
          {/* <div className="flex flex-col items-center justify-center">
            <a href="#" className="font-bold text-black">
              Check all reviews
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
