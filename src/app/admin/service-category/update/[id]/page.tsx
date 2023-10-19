'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import {
  useServiceCategoryQuery,
  useUpdateServiceCategoryMutation,
} from '@/redux/api/serviceCategoryApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import { revalidateTag } from 'next/cache';

type IDProps = {
  params: any;
};

const ServiceCategoryUpdatePage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useServiceCategoryQuery(id);
  const [updateServiceCategory, { isLoading: updateLoading }] =
    useUpdateServiceCategoryMutation();

  const onSubmit = async (values: { title: string }) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateServiceCategory({ id, body: values });
      revalidateTag('categories');
      responseMessage(res, 'Category updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    categoryName: data?.data?.categoryName || '',
    description: data?.data?.description || '',
    categoryImage: data?.data?.categoryImage || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Category List',
            link: '/admin/service-category',
          },
        ]}
      />

      <ActionBar title="Update Service Category"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
          disabled={updateLoading}
          className="bg-teal-700"
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ServiceCategoryUpdatePage;
