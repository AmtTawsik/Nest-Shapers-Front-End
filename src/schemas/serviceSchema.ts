import * as yup from 'yup';

export const serviceSchema = yup.object().shape({
  serviceName: yup.string().required('Service name is required'),
  description: yup.string().required('Service Description is required'),
  price: yup.number().required('Service Price is required'),
  imageUrl: yup.string().required('Service image url is required'),
  serviceCategoryId: yup.string().required('Service category is required'),
});
