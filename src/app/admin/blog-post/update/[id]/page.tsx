'use client';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCBreadCrumbs from '@/components/ui/BreadCrumbs/HCBreadCrumb';
import Form from '@/components/ui/Form/Form';
import FormInput from '@/components/ui/Form/FormInput';
import ServiceCategoryField from '@/components/ui/Form/ServiceCategoryField';
import { useBlogQuery, useUpdateBlogMutation } from '@/redux/api/blogApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Col, Row, message } from 'antd';
import { revalidateTag } from 'next/cache';

type IDProps = {
  params: any;
};

const UpdateBlogPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useBlogQuery(id);
  const [updateBlog, { isLoading: updateLoading }] = useUpdateBlogMutation();

  const onSubmit = async (values: any) => {
    if (isLoading) {
      message.loading('Updating.....');
    }
    try {
      //   console.log(data);
      const res = await updateBlog({ id, body: values });
      revalidateTag('blogs');
      responseMessage(res, 'Blog updated successfully');
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    title: data?.data?.title || '',
    authorName: data?.data?.authorName || '',
    imageUrl: data?.data?.imageUrl || '',
    blogLink: data?.data?.blogLink || '',
    categoryId: data?.data?.categoryId || '',
  };

  return (
    <div>
      <HCBreadCrumbs
        items={[
          {
            label: 'Blog List',
            link: '/admin/blog-post',
          },
        ]}
      />

      <ActionBar title="Update Blog"> </ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="title" label="Blog Title" />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="authorName" label="Author Name" />
          </Col>
        </Row>

        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="imageUrl" label="Blog Image Url" />
          </Col>
          <Col span={8} style={{ margin: '10px 0' }}>
            <ServiceCategoryField name="categoryId" label="Service Category" />
          </Col>
        </Row>

        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: '10px 0' }}>
            <FormInput name="blogLink" label="Blog Link Url" />
          </Col>
        </Row>

        <Button
          type="primary"
          htmlType="submit"
          disabled={isLoading}
          className="bg-teal-700"
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateBlogPage;
