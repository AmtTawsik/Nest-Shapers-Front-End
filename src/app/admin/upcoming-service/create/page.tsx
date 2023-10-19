'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import Form from '@/components/ui/Form/Form';
import FormSelectField from '@/components/ui/Form/FormSelectField';
import ServiceField from '@/components/ui/Form/ServiceField';
import { booleanOptions } from '@/constants/global';
import { useAddUpcomingServiceMutation } from '@/redux/api/upcomingServiceApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import { revalidateTag } from 'next/cache';
import HCBreadCrumbs from '../../../../components/ui/BreadCrumbs/HCBreadCrumb';

const CreateUpcomingServicePage = () => {
  const [addUpcomingService, { isLoading }] = useAddUpcomingServiceMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const updatedStatus = data.status === 'true' ? true : false;

      const updatedData = {
        ...data,
        status: updatedStatus,
      };

      const res = await addUpcomingService(updatedData);
      revalidateTag('upcomingServices');
      responseMessage(res, 'Upcoming service created Successfully');
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
            label: 'Upcoming Service List',
            link: `/${base}/upcoming-service`,
          },
        ]}
      />
      <ActionBar title="Create Upcoming Service"></ActionBar>
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
              name="status"
              options={booleanOptions}
              label="Status"
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

export default CreateUpcomingServicePage;
