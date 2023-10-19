'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormSelectField from '@/components/ui/Form/FormSelectField';
import ServiceField from '@/components/ui/Form/ServiceField';
import { booleanOptions } from '@/constants/global';
import {
  useUpcomingServiceQuery,
  useUpdateUpcomingServiceMutation,
} from '@/redux/api/upcomingServiceApi';

import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import { revalidateTag } from 'next/cache';

type IDProps = {
  params: any;
};

const UpcomingServiceUpdatePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useUpcomingServiceQuery(id);
  const [updateUpcomingService, { isLoading: updateLoading }] =
    useUpdateUpcomingServiceMutation();

  const onSubmit = async (data: any) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      const updatedStatus = data.status === 'true' ? true : false;

      const updatedData = {
        ...data,
        status: updatedStatus,
      };

      //   console.log(data);
      const res = await updateUpcomingService({ id, body: updatedData });
      revalidateTag('upcomingServices');
      responseMessage(res, 'Service updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    serviceId: data?.data?.serviceId || '',
    status: String(data?.data?.status) || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Upcoming Services',
            link: '/admin/upcoming-service',
          },
        ]}
      />

      <ActionBar title="Update Upcoming Service"> </ActionBar>
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
          disabled={updateLoading}
          className="bg-teal-700"
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpcomingServiceUpdatePage;
