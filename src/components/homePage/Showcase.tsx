import { Image } from 'antd';

function Showcase() {
  return (
    <section className="block px-3 md:px-0 py-12 md:py-0">
      <div className="py-6 md:py-12 lg:pb-32 lg:pt-32 w-full">
        <div className="">
          <div className="text-center">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Gallery of Excellence: Our Recent Works
            </h2>
            <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-1 lg:mb-16">
              <p className="text-hcOrange-base font-semibold">
                Witness the Craftsmanship That Defines Our House Servicing
                Projects
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5  justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full h-[250px]">
              <Image
                alt="showcase work image"
                src="https://i.ibb.co/fGj7yPj/pexels-greta-hoffman-7728943.jpg"
                className="w-full h-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
