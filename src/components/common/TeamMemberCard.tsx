/* eslint-disable @next/next/no-img-element */
function TeamMemberCard() {
  return (
    <div className="grid-flow-row grid flex-row justify-center gap-6 border border-solid border-teal-700 bg-white p-8 max-[991px]:mx-auto max-[991px]:max-w-[640px] max-[767px]:px-6 max-[767px]:py-8 max-[479px]:w-full rounded-md grid-cols-1 md:grid-cols-2">
      <img
        src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0f4871ea332919af9f8d_Rectangle%2035.png"
        alt=""
        className="inline-block h-64 w-full object-cover"
      />
      <div className="">
        <div className="text-xl font-semibold">John</div>
        <div className="font-semibold text-hcOrange-base mb-4">
          Webflow Developer
        </div>
        <p className="text-sm text-[#647084]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
          purus sit. Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus
          sit amet luctus venenatis elit ut aliquam, purus sit amet luctus
          venenatis
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
