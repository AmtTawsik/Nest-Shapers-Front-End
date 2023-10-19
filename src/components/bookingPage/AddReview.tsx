import { useAddReviewAndRatingMutation } from '@/redux/api/reviewAndRatingApi';
import { getUserInfo } from '@/services/auth.service';
import { responseMessage } from '@/utils/responseMessage';
import { Input, Rate, message } from 'antd';
import { useState } from 'react';

function AddReview({ serviceId }: { serviceId: string }) {
  const [value, setValue] = useState(5);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const { userId } = getUserInfo() as any;
  const [review, setReview] = useState('');
  const [addReviewAndRating, { isLoading }] = useAddReviewAndRatingMutation();

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setReview(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      userId: userId,
      serviceId: serviceId,
      rating: value,
      review: review,
    };
    console.log(data);
    message.loading('Adding Review...');
    try {
      const res = await addReviewAndRating(data);
      responseMessage(res, 'Review added Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  return (
    <div>
      <h2 className="text-lg text-teal-950 mb-3 font-semibold">Your Review:</h2>
      <form
        className=" max-w-[400px] bg-teal-50 p-4 rounded-md"
        onSubmit={onSubmit}
      >
        <div>
          <Input placeholder="Give Your Review" required onChange={onChange} />
          <div className="mt-2 flex items-center">
            <span>Your Rating:</span>
            <Rate
              tooltips={desc}
              onChange={setValue}
              value={value}
              className="ml-4 mt-2"
            />
            {value ? (
              <span className="ant-rate-text">{desc[value - 1]}</span>
            ) : (
              ''
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-teal-700 px-2 py-1 mt-4 rounded-md text-white"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}

export default AddReview;
