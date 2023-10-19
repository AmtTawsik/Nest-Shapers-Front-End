import { Carousel } from 'antd';
import Link from 'next/link';
import './Banner.css';

const HomeBanner = () => (
  <Carousel autoplay>
    <section className="banner banner-one" style={{}}>
      <div className="banner-content">
        <span>Blooms & Beyond: Elevate Your Garden</span>
        <h1>
          Transform your outdoor space with our expert gardening services and
          thoughtful landscape designs.
        </h1>
        <Link
          href="/available-services"
          className="px-8 py-4 rounded-md text-white text-lg bg-hcOrange-base"
        >
          Our Services
        </Link>
      </div>
    </section>
    <section className="banner banner-two">
      <div className="banner-content">
        <span>Above it All: Roffing Excellence</span>
        <h1>
          Trust our roofing expertise to secure your home with durable solutions
          and peace of mind.
        </h1>
        <Link
          href="/available-services"
          className="px-8 py-4 rounded-md text-white text-lg bg-hcOrange-base"
        >
          Our Services
        </Link>
      </div>
    </section>
    <section className="banner banner-three">
      <div className="banner-content">
        <span>Spotless Sanctuary: Our Cleaning Mastery</span>
        <h1>
          Experience the magic of a pristine home through our thorough cleaning
          services
        </h1>
        <Link
          href="/available-services"
          className="px-8 py-4 rounded-md text-white text-lg bg-hcOrange-base"
        >
          Our Services
        </Link>
      </div>
    </section>
  </Carousel>
);

export default HomeBanner;
