'use client';

import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';

import FormSelectField from '@/components/ui/Form/FormSelectField';
import { genderOptions } from '@/constants/global';
import { useAddUserMutation } from '@/redux/api/userApi';
import { registerSchema } from '@/schemas/register';
import { responseMessage } from '@/utils/responseMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row, message } from 'antd';

const CreateAdminPage = () => {
  const [addUser, { isLoading }] = useAddUserMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await addUser({ ...data, role: 'admin' });

      responseMessage(res, 'Admin Created Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };

  return (
    <div className="px-12 py-6">
      <h1 className="mt-8 text-teal-950 text-2xl font-bold mb-6">
        Create Admin
      </h1>
      <Form
        submitHandler={onSubmit}
        isReset={false}
        resolver={yupResolver(registerSchema)}
      >
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="fullName"
              label="User Full Name"
              required
            />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="email"
              label="User Email"
              required
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="password"
              size="large"
              name="password"
              label="User Password"
              required
            />
          </Col>

          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="contactNumber"
              label="User Phone Number"
              required
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormSelectField
              size="large"
              name="gender"
              options={genderOptions}
              label="Gender"
              placeholder="Select"
              required
            />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="profileImageUrl"
              label="User Profile Image Url"
              required
            />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="address"
              label="User Address"
              required
            />
          </Col>
        </Row>

        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading}
          className="bg-teal-700"
        >
          Crate Admin
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdminPage;
