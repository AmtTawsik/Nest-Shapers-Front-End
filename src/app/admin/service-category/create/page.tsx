'use client';

import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import { useAddServiceCategoryMutation } from '@/redux/api/serviceCategoryApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import { revalidateTag } from 'next/cache';
import HCBreadCrumbs from '../../../../components/ui/BreadCrumbs/HCBreadCrumb';

const CreateCategoryPage = () => {
  const [addServiceCategory, { isLoading }] = useAddServiceCategoryMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await addServiceCategory(data);
      revalidateTag('categories');
      responseMessage(res, 'Service Added Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  const base = 'admin';
  return (
    <div className="px-12 py-6">
      <HCBreadCrumbs
        items={[{ label: 'Category List', link: `/${base}/service-category` }]}
      />
      <h1 className="mt-8 text-teal-950 text-2xl font-bold mb-6">
        Create Service Category
      </h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="categoryName" label="Service Category Name" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="description" label="Category Description" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="categoryImage" label="Category Image Url" />
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

export default CreateCategoryPage;
