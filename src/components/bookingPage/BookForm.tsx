'use client';

import { genderOptions } from '@/constants/global';
import { Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import Form from '../ui/Form/Form';
import FormSelectField from '../ui/Form/FormSelectField';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  contactNumber: string;
  gender: string;
  profileImageUrl: string;
  address: string;
};

function BookForm() {
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col className=" bg-teal-50 p-8 rounded-md">
        <h1 className=" text-center text-2xl text-teal-900 font-bold mb-8 capitalize">
          Book This Service
        </h1>
        <div>
          <Form submitHandler={onSubmit} isReset={false}>
            <Row gutter={{ xs: 32, sm: 32, md: 32, lg: 32 }}>
              <Col
                className="gutter-row w-full"
                lg={32}
                md={32}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                  minWidth: '350px',
                }}
              >
                <FormSelectField
                  size="large"
                  name="gender"
                  options={genderOptions}
                  label="Select a Time Slot"
                  placeholder="Select"
                  required
                />
              </Col>
            </Row>

            <button
              type="submit"
              className=" w-full mt-4 py-2 rounded-md text-white text-lg bg-teal-700"
            >
              Book Service
            </button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default BookForm;
