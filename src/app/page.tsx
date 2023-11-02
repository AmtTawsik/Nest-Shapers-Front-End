import HomeBanner from '@/components/homePage/Banner';
import CallToAction from '@/components/homePage/CallToAction';
import Categories from '@/components/homePage/Categories';
import Features from '@/components/homePage/Features';
import LatestBlogs from '@/components/homePage/LatestBlogs';
import Overview from '@/components/homePage/Overview';
import Reviews from '@/components/homePage/Reviews';
import Services from '@/components/homePage/Services';
import Showcase from '@/components/homePage/Showcase';
import UpcomingService from '@/components/homePage/UpcomingService';
import PublicHeader from '@/components/view/headers/PublicHeader';
import { getBaseUrl } from '@/helpers/config/envConfig';

export default async function Home() {
  const baseUrl = getBaseUrl();
  const featuredRes = await fetch(
    `${baseUrl}/available-service?page=1&limit=30`,
    {
      cache: 'no-store',
    }
  );
  const { data: featuredServices } = await featuredRes.json();
  const updatedFeaturedServices = featuredServices?.filter(
    // @ts-ignore
    (service) => service.isFeatured === true
  );

  const categories = await fetch(
    `${baseUrl}/service-category?page=1&limit=30`,
    {
      cache: 'no-store',
    }
  );
  const { data: categoriesData } = await categories.json();

  const upcomingService = await fetch(
    `${baseUrl}/upcoming-service?page=1&limit=30`,
    {
      cache: 'no-store',
    }
  );
  const { data: upcomingServies } = await upcomingService.json();

  const upcomingServiesData = upcomingServies?.filter(
    // @ts-ignore
    (service) => service?.status === true
  );

  const blogs = await fetch(`${baseUrl}/blog?page=1&limit=6`, {
    cache: 'no-store',
  });
  const { data: blogsData } = await blogs.json();

  return (
    <main>
      <PublicHeader />
      <HomeBanner />
      <Overview />
      <Features />
      <Categories categories={categoriesData} />
      <Services featuredServices={updatedFeaturedServices} />
      <UpcomingService upcomingServices={upcomingServiesData} />
      <Reviews />
      <LatestBlogs blogs={blogsData} />
      <CallToAction />
      <Showcase />
    </main>
  );
}
