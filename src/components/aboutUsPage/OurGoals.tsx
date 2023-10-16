/* eslint-disable @next/next/no-img-element */
function OurGoals() {
  return (
    <section className="">
      <div className="py-16 md:py-24 lg:pt-8 lg:pb-24 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start gap-8 lg:gap-24">
          <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-2">
            <div className="flex w-full flex-col items-start gap-5 border border-solid border-hcOrange-base p-20 rounded-2xl">
              <h2 className="font-bold text-3xl md:text-5xl text-teal-950">
                Our Goals and Aspirations
              </h2>
              <p className="flex-col text-[#808080] max-[479px]:text-sm">
                {' '}
                We strive to elevate the quality of living spaces by infusing
                them with beauty, functionality, and a touch of individuality.
                Our mission extends to setting new benchmarks within the
                industry. We aspire to be recognized not only for our projects
                but as thought leaders and innovators in house servicing.
                <br />
                <br />
                Beyond individual projects, our mission includes contributing to
                the empowerment of communities. We actively seek opportunities
                to make a positive impact through local initiatives, educational
                programs, and sustainable practices.
                <br />
                <br />
                We are on a mission to foster creativity, both within our team
                and in the broader community. We believe that a creative
                approach leads to not only aesthetically pleasing results but
                also solutions that stand the test of time.
              </p>
            </div>
            <img
              src="https://i.ibb.co/vPHzf8h/pexels-karolina-grabowska-4239146.jpg"
              alt=""
              className="inline-block h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurGoals;
