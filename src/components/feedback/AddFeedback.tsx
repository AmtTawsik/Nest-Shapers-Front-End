import { useAddFeedbackMutation } from '@/redux/api/feedbackApi';
import { getUserInfo } from '@/services/auth.service';
import { responseMessage } from '@/utils/responseMessage';
import { message } from 'antd';
import { useState } from 'react';

function AddFeedback() {
  const { userId } = getUserInfo() as any;
  const [review, setReview] = useState('');
  const [addFeedback, { isLoading }] = useAddFeedbackMutation();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setReview(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      userId: userId,
      comment: review,
    };
    console.log(data);
    message.loading('Adding Review...');
    try {
      const res = await addFeedback(data);
      setReview('');
      responseMessage(res, 'Feedback added Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  return (
    <div>
      <form
        className=" max-w-[700px] mx-auto bg-teal-700 p-8 rounded-md text-center py-16"
        onSubmit={onSubmit}
      >
        <div>
          <input
            placeholder="Give Your Feedback"
            required
            value={review}
            onChange={onChange}
            className="w-full py-3 px-3 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-hcOrange-base px-6  py-2 mt-4 rounded-md text-white"
          disabled={isLoading}
        >
          Add Feedback
        </button>
      </form>
    </div>
  );
}

export default AddFeedback;
