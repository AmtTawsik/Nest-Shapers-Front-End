/* eslint-disable @next/next/no-img-element */

'use client';

import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import FormSelectField from '@/components/ui/Form/FormSelectField';
import { genderOptions } from '@/constants/global';
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from '@/redux/api/profileApi';

import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

function MyProfilePage() {
  // @ts-ignore
  const { data, isLoading } = useProfileQuery();
  const profileData = data?.profileData;
  const [updateProfile, { isLoading: updateLoading }] =
    useUpdateProfileMutation();

  const onSubmit = async (values: any) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateProfile({ body: values });
      responseMessage(res, 'Profile updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    fullName: profileData?.fullName || '',
    email: profileData?.email || '',
    password: profileData?.password || '',
    contactNumber: profileData?.contactNumber || '',
    gender: profileData?.gender || '',
    profileImageUrl: profileData?.profileImageUrl || '',
    address: profileData?.address || '',
  };
  return (
    <div>
      <div className="text-center text-4xl text-teal-700 mt-4">
        <h1 className="text-center">
          Welcome to your profile {profileData?.fullName}
        </h1>
        <div className="w-[150px] h-[150px] bg-teal-500 mx-auto mt-4">
          <img
            src={profileData?.profileImageUrl}
            alt="avatar"
            className="w-[150px] h-[150px]"
          />
        </div>
      </div>
      <div className="px-12 py-6"></div>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="fullName"
              label="Your Full Name"
              required
            />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="email"
              label="Your Email"
              required
            />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="contactNumber"
              label="Your Phone Number"
              required
            />
          </Col>
          {/* <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="password"
              size="large"
              name="password"
              label="Your Password"
              required
            />
          </Col> */}
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormSelectField
              size="large"
              name="gender"
              options={genderOptions}
              label="Your Gender"
              placeholder="Select"
              required
            />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              type="text"
              size="large"
              name="profileImageUrl"
              label="Your Profile Image Url"
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
          disabled={updateLoading}
          className="bg-teal-700"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default MyProfilePage;
