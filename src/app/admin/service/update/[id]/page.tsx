'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import FormTextArea from '@/components/ui/Form/FormTextArea';
import ServiceCategoryField from '@/components/ui/Form/ServiceCategoryField';
import {
  useServiceQuery,
  useUpdateServiceMutation,
} from '@/redux/api/serviceApi';

import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

type IDProps = {
  params: any;
};

const ServiceUpdatePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useServiceQuery(id);
  const [updateService, { isLoading: updateLoading }] =
    useUpdateServiceMutation();

  const onSubmit = async (values: any) => {
    const finalData = { ...values, price: Number(values.price) };
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateService({ id, body: finalData });
      responseMessage(res, 'Service updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    serviceName: data?.data?.serviceName || '',
    description: data?.data?.description || '',
    price: data?.data?.price || '',
    imageUrl: data?.data?.imageUrl || '',
    serviceCategoryId: data?.data?.serviceCategoryId || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Category List',
            link: '/admin/service',
          },
        ]}
      />

      <ActionBar title="Update Service Category"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="serviceName" label="Service Name" />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="price" label="service Price" type="number" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={16} style={{ margin: '10px 0' }}>
            <FormTextArea
              name="description"
              label="Service Description"
              rows={4}
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="imageUrl" label="Service Image Url" />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <ServiceCategoryField
              name="serviceCategoryId"
              label="Service Category"
            />
          </Col>
        </Row>

        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading}
          className="bg-teal-700"
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ServiceUpdatePage;
