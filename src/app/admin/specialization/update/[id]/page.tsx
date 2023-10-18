'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import {
  useSpecializationQuery,
  useUpdateSpecializationMutation,
} from '@/redux/api/specializationApi';

import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

type IDProps = {
  params: any;
};

const SpecializationUpdatePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useSpecializationQuery(id);
  const [updateSpecialization, { isLoading: updateLoading }] =
    useUpdateSpecializationMutation();

  const onSubmit = async (values: { title: string }) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateSpecialization({ id, body: values });
      responseMessage(res, 'Specialization updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    title: data?.data?.title || '',
    description: data?.data?.description || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Specialization List',
            link: '/admin/specialization',
          },
        ]}
      />

      <ActionBar title="Update Specialization"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="title" label="Specialization Name" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="description" label="Specialization Description" />
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

export default SpecializationUpdatePage;
