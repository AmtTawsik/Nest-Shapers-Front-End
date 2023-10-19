import AboutUsSection from '@/components/aboutUsPage/AboutUsSection';
import OurGoals from '@/components/aboutUsPage/OurGoals';
import OurMisson from '@/components/aboutUsPage/OurMisson';

function AboutUsPage() {
  return (
    <div>
      <AboutUsSection />
      <OurMisson />
      <OurGoals />
      {/* <TeamMember /> */}
    </div>
  );
}

export default AboutUsPage;
