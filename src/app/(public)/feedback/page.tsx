'use client';

import AddFeedback from '@/components/feedback/AddFeedback';
import { useFaqsQuery } from '@/redux/api/faqApi';

function FeedbackPage() {
  const { data: faqData, isLoading } = useFaqsQuery({
    limit: 100,
    page: 1,
  });
  const faqs = faqData?.faqs;

  return (
    <div className="bg-white">
      <div className="py-24 md:py-24 lg:py-24 mx-auto w-full max-w-7xl px-5 md:px-10 bg-white">
        <div className="flex-col flex items-center">
          <div className="max-w-[800px] text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Share Your Experience With Us
            </h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-hcOrange-base font-semibold">
                Your Feedback matters - help us Enhance your Experience Further
              </p>
            </div>
          </div>
        </div>
        <AddFeedback />
      </div>

      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-12 lg:py-12">
          <div className="mb-8 text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#647084]">
              Find Answers to Common Qureries About Our Services
            </p>
          </div>

          <div className="mb-12 flex flex-col items-center">
            {/* @ts-ignore */}
            {faqs?.map((faq) => (
              <div
                key={faq?.key}
                className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-[#f2f2f7] p-8"
              >
                <div className="flex cursor-pointer justify-between">
                  <p className="text-xl font-bold">{faq?.question}</p>
                  <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                    <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
                    <div className="h-0.5 w-5 bg-[#276ef1]"></div>
                  </div>
                </div>
                <p className="mb-4">{faq?.answer}</p>
              </div>
            ))}
          </div>

          <p className="text-center">
            Can’t find the answer you’re looking for? Reach out to our{' '}
            <a href="#">customer support team</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default FeedbackPage;
