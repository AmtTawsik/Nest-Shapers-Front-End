/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
function ClientReviewCard() {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-8">
      <p className="text-[#636262]">
        I've been using this payment system for a few months now and I have to
        say it's been great. The interface is simple and easy to navigate, and
        transactions are fast and secure. I feel confident using this system to
        handle all of my financial transactions.
      </p>
      <div className="mt-8 w-full border-[0.5px] border-solid border-[#eceae2]"></div>
      <div className="flex flex-row">
        <img
          src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a281_Ellipse%2010%402x-1.png"
          alt="Testimonial image"
          className="mr-4 inline-block h-16 w-16 object-contain"
        />
        <div className="flex flex-col">
          <h6 className="text-sm font-bold md:text-base text-teal-950">
            Laila Bahar
          </h6>
          <p className="text-sm text-hcOrange-base">Customer</p>
        </div>
      </div>
    </div>
  );
}

export default ClientReviewCard;
