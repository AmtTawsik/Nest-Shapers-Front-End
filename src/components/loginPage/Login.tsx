'use client';

import { useUserLoginMutation } from '@/redux/api/authApi';
import { loginSchema } from '@/schemas/login';
import { getUserInfo, storeUserInfo } from '@/services/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, Row, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Form from '../ui/Form/Form';
import FormInput from '../ui/Form/FormInput';

type FormValues = {
  id: string;
  password: string;
};

function Login() {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      storeUserInfo({ accessToken: res?.data?.accessToken });

      if (res?.data?.accessToken) {
        const { role } = getUserInfo() as any;
        message.success('User logged in successfully');
        if (role === 'customer') {
          router.push('/my-profile');
        }
        if (role === 'admin') {
          router.push('/admin/myProfile');
        }
        if (role === 'super_admin') {
          router.push('/super-admin/my-profile');
        }
        if (role === 'team_member') {
          router.push('/team-member/my-profile');
        }
      }
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
      message.error('something went wrong, try again');
    }
  };

  return (
    <Row justify="center" align="middle" className="h-screen">
      <Col
        sm={16}
        md={14}
        lg={10}
        style={{ marginTop: '-96px' }}
        className=" bg-teal-50 p-8 rounded-md"
      >
        <h1 className=" text-center text-2xl text-teal-900 font-bold mb-8 capitalize">
          Login first before decorate your house
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                type="text"
                size="large"
                name="email"
                label="Your Email"
                required
              />
            </div>
            <div
              style={{
                margin: '15px 0px',
              }}
            >
              <FormInput
                type="password"
                size="large"
                name="password"
                label="Your Password"
                required
              />
            </div>
            <button
              type="submit"
              className=" w-full py-2 rounded-md text-white text-lg bg-hcOrange-base"
              disabled={isLoading}
            >
              {isLoading ? 'Please wait a moment...' : 'Login'}
            </button>
          </Form>
          {errorMessage && (
            <p className="mt-2 text-red-500 text-base">{errorMessage}</p>
          )}
          <p className="mt-1">
            Do not have an account? <Link href="/register">Signup first</Link>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
