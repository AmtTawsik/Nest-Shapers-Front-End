import { Image } from 'antd';

function Showcase() {
  return (
    <section className="block px-3 md:px-0 py-16 md:py-5 bg-rose-50">
      <div className="py-6 md:py-12 lg:pb-10 lg:pt-10 w-full">
        <div className="">
          <div className="text-center">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Photo Gallery: Our Recent Works
            </h2>
            <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-1 lg:mb-16">
              <p className="text-hcOrange-base font-semibold">
                Witness the Craftsmanship That Defines Our House Servicing
                Projects
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12 gap-5 md:gap-10 md:mx-10">
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/mhR7pdj/slider3.webp"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/jgfY1SH/slider2.webp"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/0GHJ55Y/slider1.webp"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://content.pymnts.com/wp-content/uploads/2019/07/home-services-investments.jpg"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://content.pymnts.com/wp-content/uploads/2019/08/home-maintenance.jpg"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://maidinto.ca/wp-content/uploads/2022/10/Why-House-Cleaning-Services-Are-Important-for-Your-Healthier-Lifestyle.jpeg"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://www.vancouversbestcleaners.com/wp-content/uploads/2022/04/1.jpg"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="w-full h-[250px] rounded-lg border-2 shadow-lg">
              <Image
                alt="showcase work image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ik6uOU8P3u7ssle_KdN6xIFy0ojxPMd2SLr9qyM0mTfs4WxQXsE1-GQRDvQW0MbSNRI&usqp=CAU"
                className="w-full h-[250px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
