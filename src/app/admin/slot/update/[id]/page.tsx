'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import AvailableServiceField from '@/components/ui/Form/AvailableServiceField';
import Form from '@/components/ui/Form/Form';
import FormTimePicker from '@/components/ui/Form/FormTimePicker';
import ServiceTeamField from '@/components/ui/Form/ServiceTeamField';

import { useGetSlotQuery, useUpdateSlotMutation } from '@/redux/api/slotsApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

type IDProps = {
  params: any;
};

const UpdateSlotPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useGetSlotQuery(id);
  const [updateSlot, { isLoading: updateLoading }] = useUpdateSlotMutation();

  const onSubmit = async (values: { title: string }) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateSlot({ id, body: values });
      responseMessage(res, 'Slot updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    startTime: data?.data?.startTime || '',
    serviceTeamId: data?.data?.serviceTeamId || '',
    availableServiceId: data?.data?.availableServiceId || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Slot List',
            link: '/admin/slot',
          },
        ]}
      />

      <ActionBar title="Update Service Category"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormTimePicker name="startTime" label="Start time" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <AvailableServiceField
              name="availableServiceId"
              label="Select Service"
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <ServiceTeamField
              name="serviceTeamId"
              label="Select Service Team"
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

export default UpdateSlotPage;
