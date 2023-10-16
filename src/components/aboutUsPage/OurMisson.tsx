/* eslint-disable @next/next/no-img-element */
function OurMisson() {
  return (
    <section className="">
      <div className="py-16 md:py-24 lg:py-24 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start gap-8 lg:gap-24">
          <div className="grid place-items-start gap-10 max-[991px]:gap-x-8 max-[767px]:gap-y-12 grid-cols-1 lg:grid-cols-2">
            <img
              src="https://i.ibb.co/yRqYfJZ/pexels-andrea-piacquadio-3771111.jpg"
              alt=""
              className="inline-block h-full w-full object-cover rounded-2xl"
            />
            <div className="flex w-full flex-col items-start gap-5 border border-solid border-hcOrange-base p-20 rounded-2xl">
              <h2 className="font-bold text-3xl md:text-5xl text-teal-950">
                Our Mission
              </h2>
              <p className="flex-col text-[#808080] max-[479px]:text-sm">
                {' '}
                At House Crafters, our mission is to transcend the conventional
                boundaries of house servicing. We aspire to be more than just a
                service provider; we aim to be the architects of transformative
                living experiences. Our mission begins with a commitment to
                excellence. We set and maintain high standards in every aspect
                of our work, from the smallest detail to the grandest design.
                <br />
                <br />
                We believe that innovation is the heartbeat of progress. Our
                mission is to consistently explore, integrate, and pioneer
                innovative solutions that redefine the possibilities within
                house servicing
                <br />
                <br />
                Our clients are not just customers; they are partners in our
                mission. We are dedicated to understanding their unique visions
                and needs, ensuring that every project is a collaborative
                journey towards realizing their dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMisson;
