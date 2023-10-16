import UpcomingServiceCard from '../common/UpcomingServiceCard';

function UpcomingService() {
  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="flex flex-col items-center">
            <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
              <h2 className="mb-4 mt-6 text-3xl text-teal-950 font-extrabold md:text-5xl">
                Sneak Peek: Future Innovations in Home Servicing
              </h2>
              <div className="mx-auto mt-4 max-w-[528px]">
                <p className="text-hcOrange-base font-semibold">
                  Discover What is Next as We Unveil Exciting Upcoming Services
                  Soon
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <UpcomingServiceCard />
              <UpcomingServiceCard />
              <UpcomingServiceCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpcomingService;
