/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
function AboutUsSection() {
  return (
    <section className="block">
      <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex items-stretch max-[991px]:min-h-[auto] max-[991px]:w-full max-[991px]:flex-col grid-cols-1 lg:grid-cols-[65%_30%] gap-8 lg:gap-20">
          <div className="flex-col flex-1 flex justify-center gap-8">
            <div className="flex-col flex gap-8">
              <h2 className="font-bold text-3xl md:text-5xl text-teal-950">
                About us
              </h2>
              <p className="max-[479px]:text-sm">
                At Nest Shapers, we're not just in the business of house
                servicing; we're in the business of transforming spaces and
                enriching lives. Founded in 2020, our journey is woven with a
                passion for craftsmanship, a commitment to innovation, and an
                unwavering dedication to our clients. From our humble
                beginnings, we've grown into a dynamic team of professionals,
                each contributing their expertise to redefine the standards of
                house servicing. Our journey is marked by milestones of
                successful projects, satisfied clients, and a continuous pursuit
                of excellence. We believe that a home is more than bricks and
                mortar; it's a canvas for personal expression and cherished
                moments. Every project at [Your Company Name] is approached with
                an artist's eye, a technician's precision, and a homeowner's
                understanding. We don't just build or renovate; we craft
                experiences that resonate with the soul of the dwellers.
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 flex-wrap">
              <a
                href="#"
                className="inline-block items-center bg-teal-700 px-6 py-3 text-center font-semibold text-white"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="block overflow-hidden bg-teal-50 max-[991px]:h-[475px] rounded-md w-full lg:w-[30%]">
            <img
              src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
              alt=""
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
