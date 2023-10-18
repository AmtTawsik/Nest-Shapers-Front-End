'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import { useFaqQuery, useUpdateFaqMutation } from '@/redux/api/faqApi';

import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';

type IDProps = {
  params: any;
};

const FaqUpdatePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useFaqQuery(id);
  const [updateFaq, { isLoading: updateLoading }] = useUpdateFaqMutation();

  const onSubmit = async (values: { title: string }) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateFaq({ id, body: values });
      responseMessage(res, 'Faq updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    question: data?.data?.question || '',
    answer: data?.data?.answer || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Faqs List',
            link: '/admin/faq',
          },
        ]}
      />

      <ActionBar title="Update Faq"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="question" label="Question" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="answer" label="Answer" />
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

export default FaqUpdatePage;
