'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import Form from '@/components/ui/Form/Form';
import { Button, Col, Row, message } from 'antd';

import { useAddSlotMutation } from '@/redux/api/slotsApi';
import FormTimePicker from '../ui/Form/FormTimePicker';
import ServiceTeamField from '../ui/Form/ServiceTeamField';

const CreateSlot = ({ availableServiceId }: { availableServiceId: string }) => {
  const [addSlot, { isLoading: slotLoading }] = useAddSlotMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      console.log({ ...data, availableServiceId: availableServiceId });

      //   const res = await addSlot(updatedData);

      //responseMessage(res, 'Slot created Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };

  return (
    <div className="px-12 py-6">
      <ActionBar title="Create Slot for this service Service"></ActionBar>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormTimePicker name="startTime" label="Start time" />
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
          disabled={slotLoading}
          className="bg-teal-700"
        >
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateSlot;
