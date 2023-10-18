'use client';

import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';

import { useAddFaqMutation } from '@/redux/api/faqApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import HCBreadCrumbs from '../../../../components/ui/BreadCrumbs/HCBreadCrumb';

const CreateFaqPage = () => {
  const [addFaq, { isLoading }] = useAddFaqMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await addFaq(data);

      responseMessage(res, 'Faq added Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  const base = 'admin';
  return (
    <div className="px-12 py-6">
      <HCBreadCrumbs items={[{ label: 'Faqs List', link: `/${base}/faq` }]} />
      <h1 className="mt-8 text-teal-950 text-2xl font-bold mb-6">Create Faq</h1>
      <Form submitHandler={onSubmit}>
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
          disabled={isLoading}
          className="bg-teal-700"
        >
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateFaqPage;
