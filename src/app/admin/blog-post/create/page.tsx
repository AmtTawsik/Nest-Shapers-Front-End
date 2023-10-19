'use client';

import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import ServiceCategoryField from '@/components/ui/Form/ServiceCategoryField';
import { revalidateTag } from 'next/cache';

import { useAddBlogMutation } from '@/redux/api/blogApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import HCBreadCrumbs from '../../../../components/ui/BreadCrumbs/HCBreadCrumb';

const CreateBlogPage = () => {
  const [addBlog, { isLoading }] = useAddBlogMutation();

  const onSubmit = async (data: any) => {
    message.loading('Creating.....');
    try {
      const res = await addBlog(data);
      revalidateTag('blogs');
      responseMessage(res, 'Blog Added Successfully');
    } catch (err: any) {
      console.log(err);

      message.error(err.message || 'Something went wrong try again');
    }
  };
  const base = 'admin';
  return (
    <div className="px-12 py-6">
      <HCBreadCrumbs
        items={[{ label: 'Blog List', link: `/${base}/blog-post` }]}
      />
      <h1 className="mt-8 text-teal-950 text-2xl font-bold mb-6">
        Create Blog
      </h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="title" label="Blog Title" required />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="authorName" label="Author Name" required />
          </Col>
        </Row>

        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="blogLink" label="Blog Link Url" />
          </Col>
        </Row>

        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="imageUrl" label="Blog Image Url" required />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <ServiceCategoryField
              name="categoryId"
              label="Service Category"
              required={true}
            />
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

export default CreateBlogPage;
