import TeamMemberCard from '../common/TeamMemberCard';

/* eslint-disable @next/next/no-img-element */
function TeamMember() {
  return (
    <div className="py-16 md:py-24 lg:pb-32 lg:pt-16 mx-auto w-full max-w-7xl px-5 md:px-10">
      <div className="">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-5xl text-teal-950">
            Meet Our Dedicated Team
          </h2>
          <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
            <p className="text-hcOrange-base font-bold">
              The Heart and Soul Behind House Crafters
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 justify-center justify-items-center sm:justify-items-stretch">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
