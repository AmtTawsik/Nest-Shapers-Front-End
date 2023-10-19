'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import Form from '@/components/ui/Form/Form';
import FormSelectField from '@/components/ui/Form/FormSelectField';
import ServiceField from '@/components/ui/Form/ServiceField';
import { booleanOptions } from '@/constants/global';
import { useAddAvailableServiceMutation } from '@/redux/api/availableServiceApi';
import { useAddSlotMutation } from '@/redux/api/slotsApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import { revalidateTag } from 'next/cache';
import HCBreadCrumbs from '../../../../components/ui/BreadCrumbs/HCBreadCrumb';

const CreateAvailableServicePage = () => {
  const [addAvailableService, { isLoading }] = useAddAvailableServiceMutation();
  const [addSlot, { isLoading: slotLoading }] = useAddSlotMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const updatedIsFeatured = data.isFeatured === 'true' ? true : false;
      const updatedIsAvailable = data.isAvailable === 'true' ? true : false;

      const updatedData = {
        ...data,
        isFeatured: updatedIsFeatured,
        isAvailable: updatedIsAvailable,
      };

      const res = await addAvailableService(updatedData);
      revalidateTag('availableServices');
      responseMessage(res, 'Available service created Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  const base = 'admin';
  return (
    <div className="px-12 py-6">
      <HCBreadCrumbs
        items={[
          {
            label: 'Available Service List',
            link: `/${base}/available-service`,
          },
        ]}
      />
      <ActionBar title="Create Available Service"></ActionBar>
      <Form submitHandler={onSubmit}>
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
          disabled={isLoading}
          className="bg-teal-700"
        >
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateAvailableServicePage;
