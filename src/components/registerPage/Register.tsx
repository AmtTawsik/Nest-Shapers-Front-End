'use client';

// import { sencondaryColor } from '@/constants/colors';
// import { useUserLoginMutation } from '@/redux/api/authApi';
// import { storeUserInfo } from '@/services/auth.service';
import { genderOptions } from '@/constants/global';
import { Col, Row } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import Form from '../ui/Form/Form';
import FormInput from '../ui/Form/FormInput';
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

function RegisterForm() {
  //   const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
      //   const res = await userLogin({ ...data }).unwrap();

      //   if (res?.accessToken) {
      //     router.push('/profile');
      //     message.success('User logged in successfully');
      //   }

      //   storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row justify="center" align="middle" className="h-screen">
      <Col
        sm={18}
        md={18}
        lg={14}
        style={{ marginTop: '-96px' }}
        className=" bg-teal-50 p-8 rounded-md"
      >
        <h1 className=" text-center text-2xl text-teal-900 font-bold mb-8 capitalize">
          Registration
        </h1>
        <div>
          <Form submitHandler={onSubmit} isReset={false}>
            <Row gutter={{ xs: 32, sm: 32, md: 32, lg: 32 }}>
              <Col
                className="gutter-row w-full"
                lg={12}
                md={12}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                }}
              >
                <FormInput
                  type="text"
                  size="large"
                  name="fullName"
                  label="Your Full Name"
                  required
                />
              </Col>
              <Col
                className="gutter-row w-full"
                lg={12}
                md={12}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                }}
              >
                <FormInput
                  type="text"
                  size="large"
                  name="email"
                  label="Your Email"
                  required
                />
              </Col>
              <Col
                className="gutter-row w-full"
                lg={12}
                md={12}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                }}
              >
                <FormInput
                  type="password"
                  size="large"
                  name="password"
                  label="Your Password"
                  required
                />
              </Col>
              <Col
                className="gutter-row w-full"
                lg={12}
                md={12}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                }}
              >
                <FormInput
                  type="text"
                  size="large"
                  name="contactNumber"
                  label="Your Phone Number"
                  required
                />
              </Col>
              <Col
                className="gutter-row w-full"
                lg={12}
                md={12}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                }}
              >
                <FormSelectField
                  size="large"
                  name="gender"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select"
                  required
                />
              </Col>
              <Col
                className="gutter-row w-full"
                lg={12}
                md={12}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                }}
              >
                <FormInput
                  type="text"
                  size="large"
                  name="profileImageUrl"
                  label="Your Profile Image Url"
                  required
                />
              </Col>

              <Col
                className="gutter-row w-full"
                lg={12}
                md={12}
                xs={32}
                sm={32}
                style={{
                  marginBottom: '10px',
                }}
              >
                <FormInput
                  type="text"
                  size="large"
                  name="address"
                  label="Your Address"
                  required
                />
              </Col>
            </Row>

            <button
              type="submit"
              className=" w-full py-2 rounded-md text-white text-lg bg-green-base"
            >
              Register
            </button>
          </Form>
          <p className="mt-1">
            Already have an account? <Link href="/signin">Login</Link>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default RegisterForm;
