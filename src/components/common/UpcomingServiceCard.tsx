/* eslint-disable @next/next/no-img-element */
function UpcomingServiceCard() {
  return (
    <div>
      <div className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2">
        <img
          alt=""
          src="https://assets.website-files.com/646f6c0e32ec6f9ad7a4504c/646f6c1b66883bd637dfb14a_image9.jpeg"
          className="inline-block h-60 w-full rounded-2xl object-cover"
        />
        <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
          <div className=" flex flex-col items-start gap-4">
            <div className="rounded-md bg-hcOrange-base px-2 py-1.5 text-white">
              <p>Marketing</p>
            </div>
            <p className="text-xl font-bold md:text-2xl">
              7 Things About Web Design Your Boss Wants To Know
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingServiceCard;
