'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormSelectField from '@/components/ui/Form/FormSelectField';
import ServiceField from '@/components/ui/Form/ServiceField';
import { booleanOptions } from '@/constants/global';
import {
  useAvailableServiceQuery,
  useUpdateAvailableServiceMutation,
} from '@/redux/api/availableServiceApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import { revalidateTag } from 'next/cache';

type IDProps = {
  params: any;
};

const AvailableServiceUpdatePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useAvailableServiceQuery(id);
  const [updateAvailableService, { isLoading: updateLoading }] =
    useUpdateAvailableServiceMutation();

  const onSubmit = async (data: any) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      const updatedIsFeatured = data.isFeatured === 'true' ? true : false;
      const updatedIsAvailable = data.isAvailable === 'true' ? true : false;

      const updatedData = {
        ...data,
        isFeatured: updatedIsFeatured,
        isAvailable: updatedIsAvailable,
      };

      //   console.log(data);
      const res = await updateAvailableService({ id, body: updatedData });
      revalidateTag('availableServices');
      responseMessage(res, 'Service updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    serviceId: data?.data?.serviceId || '',
    isFeatured: String(data?.data?.isFeatured) || '',
    isAvailable: String(data?.data?.isAvailable) || '',
  };

  console.log(defaultValues);

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Available Services',
            link: '/admin/available-service',
          },
        ]}
      />

      <ActionBar title="Update Service Category"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <ServiceField name="serviceId" label="Select Service" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormSelectField
              size="large"
              name="isFeatured"
              options={booleanOptions}
              label="Featured"
              placeholder="Select"
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormSelectField
              size="large"
              name="isAvailable"
              options={booleanOptions}
              label="Available"
              placeholder="Select"
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
};

export default AvailableServiceUpdatePage;
