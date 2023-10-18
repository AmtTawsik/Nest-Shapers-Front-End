'use client';

import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';

import FormTextArea from '@/components/ui/Form/FormTextArea';
import ServiceCategoryField from '@/components/ui/Form/ServiceCategoryField';
import { useAddServiceMutation } from '@/redux/api/serviceApi';
import { serviceSchema } from '@/schemas/serviceSchema';
import { responseMessage } from '@/utils/responseMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Col, Row, message } from 'antd';
import HCBreadCrumbs from '../../../../components/ui/BreadCrumbs/HCBreadCrumb';

const CreateServicePage = () => {
  const [addService, { isLoading }] = useAddServiceMutation();

  const onSubmit = async (data: any) => {
    const finalData = { ...data, price: Number(data.price) };
    message.loading('Creating.....');
    try {
      const res = await addService(finalData);

      responseMessage(res, 'Service Added Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  const base = 'admin';
  return (
    <div className="px-12 py-6">
      <HCBreadCrumbs
        items={[{ label: 'Services List', link: `/${base}/service` }]}
      />
      <h1 className="mt-8 text-teal-950 text-2xl font-bold mb-6">
        Create Service
      </h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="serviceName" label="Service Name" required />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput
              name="price"
              label="service Price"
              type="number"
              required
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={16} style={{ margin: '10px 0' }}>
            <FormTextArea
              name="description"
              label="Service Description"
              rows={4}
              required
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="imageUrl" label="Service Image Url" required />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <ServiceCategoryField
              name="serviceCategoryId"
              label="Service Category"
              required={true}
            />
          </Col>
        </Row>

        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading}
          className="bg-teal-700"
        >
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateServicePage;
