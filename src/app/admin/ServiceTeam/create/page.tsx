'use client';

import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';

import { useAddServiceTeamMutation } from '@/redux/api/serviceTeamApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import HCBreadCrumbs from '../../../../components/ui/BreadCrumbs/HCBreadCrumb';

const CreateServiceTeamPage = () => {
  const [addServiceTeam, { isLoading }] = useAddServiceTeamMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await addServiceTeam(data);

      responseMessage(res, 'Service Team Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  const base = 'admin';
  return (
    <div className="px-12 py-6">
      <HCBreadCrumbs
        items={[{ label: 'Service Team List', link: `/${base}/ServiceTeam` }]}
      />
      <h1 className="mt-8 text-teal-950 text-2xl font-bold mb-6">
        Create Service Team
      </h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="teamName" label="Service Team Name" />
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

export default CreateServiceTeamPage;
