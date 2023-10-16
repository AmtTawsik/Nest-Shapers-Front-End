import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  password: yup.string().min(4).max(32).required(),
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email().required('Email is required'),
  gender: yup.string().required('Gender is required'),
  profileImageUrl: yup.string().required('Profile image url is required'),
  contactNumber: yup.string().required('Contact number is required'),
  address: yup.string().required('Address is required'),
});
