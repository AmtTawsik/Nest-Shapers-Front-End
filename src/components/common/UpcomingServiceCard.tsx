/* eslint-disable @next/next/no-img-element */
// @ts-ignore
function UpcomingServiceCard({ service }) {
  return (
    <div>
      <div className="flex max-w-full flex-col gap-4 rounded-md border">
        <img
          alt=""
          src={service?.service?.imageUrl}
          className="inline-block h-60 w-full object-cover"
        />
        <div className="flex h-full w-full flex-col items-start justify-around px-2 md:px-4 py-4">
          <div className=" flex flex-col items-start gap-4">
            <div className="rounded-md bg-hcOrange-base px-2 py-1.5 text-white">
              <p>{service?.service?.serviceName}</p>
            </div>
            <p className="text-base">{service?.service?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingServiceCard;
