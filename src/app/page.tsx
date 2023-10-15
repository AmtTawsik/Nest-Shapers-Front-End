import HomeBanner from '@/components/homePage/Banner';
import PublicHeader from '@/components/view/headers/PublicHeader';

export default function Home() {
  return (
    <main>
      <div className="bg-yellow-400 text-center text-sm font-bold py-2 px-2 text-white">
      Guard and Beautify Your Home with Our Premier Home Crafters.
      </div>
      <PublicHeader />
      <HomeBanner />
    </main>
  );
}
