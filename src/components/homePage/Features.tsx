/* eslint-disable @next/next/no-img-element */
function Features() {
  return (
    <section className="bg-teal-50">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 mt-6 text-3xl text-teal-950 font-extrabold md:text-5xl">
            Key Features That Set Us Apart
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="text-hcOrange-base font-bold">
              Discover the Pillars of Excellence Defining Our House Servicing
              Solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a287_Circle%20Image.svg"
              alt="Features Icon"
              className="inline-block h-16"
            />
            <p className="text-xl font-semibold text-teal-950">Precision</p>
            <p className="text-sm text-[#636262]">
              Exacting attention to detail and accuracy in every service,
              ensuring the highest quality outcomes for your home.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a285_Circle%20Image-1.svg"
              alt="Features Icon"
              className="inline-block h-16"
            />
            <p className="text-xl font-semibold text-teal-950">Versatility</p>
            <p className="text-sm text-[#636262]">
              Adaptability and a wide range of services, providing solutions
              that cater to diverse needs and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a286_Circle%20Image-2.svg"
              alt="Features Icon"
              className="inline-block h-16"
            />
            <p className="text-xl font-semibold text-teal-950">Innovation</p>
            <p className="text-sm text-[#636262]">
              Embracing modern techniques and technology to bring cutting-edge
              solutions to your house servicing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a283_Circle%20Image-3.svg"
              alt="Features Icon"
              className="inline-block h-16"
            />
            <p className="text-xl font-semibold text-teal-950">
              Personalization
            </p>
            <p className="text-sm text-[#636262]">
              Tailoring services to individual preferences, ensuring a
              customized approach that aligns with your unique vision.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a284_Circle%20Image-4.svg"
              alt="Features Icon"
              className="inline-block h-16"
            />
            <p className="text-xl font-semibold text-teal-950">Transparency</p>
            <p className="text-sm text-[#636262]">
              Open and clear communication, including straightforward pricing
              and honest practices to build trust with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
            <img
              src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a288_Circle%20Image-5.svg"
              alt="Features Icon"
              className="inline-block h-16"
            />
            <p className="text-xl font-semibold text-teal-950">Reliability</p>
            <p className="text-sm text-[#636262]">
              Consistent and dependable services, delivering on time with a
              commitment to reliability and professionalism
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
