'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import {
  useServiceTeamQuery,
  useUpdateServiceTeamMutation,
} from '@/redux/api/serviceTeamApi';

import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

type IDProps = {
  params: any;
};

const ServiceTeamUpdatePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useServiceTeamQuery(id);
  const [updateServiceTeam, { isLoading: updateLoading }] =
    useUpdateServiceTeamMutation();

  const onSubmit = async (values: { title: string }) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateServiceTeam({ id, body: values });
      responseMessage(res, 'Service Team updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    teamName: data?.data?.teamName || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Team List',
            link: '/admin/ServiceTeam',
          },
        ]}
      />

      <ActionBar title="Update Service Team"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="teamName" label="Service Team Name" />
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

export default ServiceTeamUpdatePage;
