function CallToAction() {
  return (
    <div>
      <section className="bg-teal-800 ">
        <div className="mx-auto w-full max-w-7xl bg-teal-800  text-white">
          <div className="mx-auto w-full max-w-3xl py-16 text-center md:py-24 lg:py-32">
            <div className="mb-6 flex-col md:mb-10 lg:mb-12">
              <h2 className="mb-8 text-3xl font-bold md:text-5xl">
                Subscribe to our newsletter for exclusive updates, tips and
                special offers
              </h2>
              <div className="mx-auto max-w-md">
                <p>
                  Be the first to know about our new services, promotions, and
                  expert insights. join our commiunity and lets enhance your
                  home together.
                </p>
              </div>
            </div>

            <div className="mx-auto mb-4 flex flex-col px-6">
              <form
                name="email-form"
                method="get"
                className="flex w-full flex-col items-start sm:flex-row"
              >
                <input
                  type="email"
                  className="mb-4 h-9 w-full border border-white bg-transparent  px-6 py-7 text-sm text-white sm:mr-8"
                  placeholder="Enter your email"
                  required
                />
                <a
                  href="#"
                  className="mb-4 flex w-full flex-row items-center justify-center border-[1.5px] border-solid border-white bg-[#ffffff00] px-4 py-4 font-semibold text-white sm:max-w-[172px]"
                >
                  <p className="mr-6 font-bold">Subscribe</p>
                  <svg
                    fill="currentColor"
                    className="h-4 w-4 flex-none"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </a>
                <div></div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CallToAction;
