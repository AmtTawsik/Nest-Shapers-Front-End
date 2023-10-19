'use client';
import { DeleteOutlined, ReloadOutlined } from '@ant-design/icons';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCModal from '@/components/ui/Modal/HCModal';
import HCTable from '@/components/ui/Table/HCTable';
import { useDebounced } from '@/hooks/useDebounced';

import {
  useDeleteReviewAndRatingMutation,
  useReviewAndRatingsQuery,
} from '@/redux/api/reviewAndRatingApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Input, message } from 'antd';
import { useState } from 'react';

const ReviewListPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deleteReviewAndRating, { isLoading: deleteLoading }] =
    useDeleteReviewAndRatingMutation();

  const [open, setOpen] = useState<boolean>(false);
  const [blogId, setBlogId] = useState<string>('');

  query['limit'] = size;
  query['page'] = page;
  query['sortBy'] = sortBy;
  query['sortOrder'] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query['searchTerm'] = debouncedTerm;
  }
  const { data, isLoading } = useReviewAndRatingsQuery({ ...query });

  const reviews = data?.reviewAndRatings;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading('Deleting.....');
    try {
      const res = await deleteReviewAndRating(id);

      if (res) {
        setOpen(false);
        responseMessage(res, 'Review Deleted Successfully');
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: 'User',
      dataIndex: ['user', 'email'],
    },
    {
      title: 'Service',
      dataIndex: ['service', 'serviceName'],
    },
    {
      title: 'Review',
      dataIndex: 'review',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
    },

    {
      title: 'Action',
      render: function (data: any) {
        return (
          <div className="flex items-center">
            <Button
              onClick={() => {
                setOpen(true);
                setBlogId(data?.id);
              }}
              type="primary"
              className="flex items-center"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === 'ascend' ? 'asc' : 'desc');
  };

  const resetFilters = () => {
    setSortBy('');
    setSortOrder('');
    setSearchTerm('');
  };

  return (
    <div>
      <ActionBar title="Reviews List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{
            width: '20%',
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div className="flex items-center">
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: '0px 5px' }}
              className=" bg-teal-700 flex items-center"
            >
              Reset
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <HCTable
        loading={isLoading}
        columns={columns}
        dataSource={reviews}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <HCModal
        title="Delete Review"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(blogId)}
      >
        <p className="my-5">Do you want to delete this Review?</p>
      </HCModal>
    </div>
  );
};

export default ReviewListPage;
