import HomeBanner from '@/components/homePage/Banner';
import CallToAction from '@/components/homePage/CallToAction';
import Categories from '@/components/homePage/Categories';
import LatestBlogs from '@/components/homePage/LatestBlogs';
import Overview from '@/components/homePage/Overview';
import Services from '@/components/homePage/Services';
import Showcase from '@/components/homePage/Showcase';
import UpcomingService from '@/components/homePage/UpcomingService';
import PublicHeader from '@/components/view/headers/PublicHeader';

export default function Home() {
  return (
    <main>
      <div className=" bg-teal-700 text-center text-sm py-2 px-2 text-white">
        Protect and Decorate Your Home With our Best House Crafters
      </div>
      <PublicHeader />
      <HomeBanner />
      {/* <FeaturedIn /> */}
      <Overview />
      <Categories />
      <Services />
      <CallToAction />
      <UpcomingService />
      <LatestBlogs />
      <Showcase />
    </main>
  );
}
