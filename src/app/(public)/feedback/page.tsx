'use client';

import AddFeedback from '@/components/feedback/AddFeedback';

function FeedbackPage() {
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
    </div>
  );
}

export default FeedbackPage;
