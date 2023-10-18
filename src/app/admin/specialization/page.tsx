'use client';
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCTable from '@/components/ui/Table/HCTable';
import { useDebounced } from '@/hooks/useDebounced';

import HCModal from '@/components/ui/Modal/HCModal';
import {
  useDeleteSpecializationMutation,
  useSpecializationsQuery,
} from '@/redux/api/specializationApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Input, message } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

const SpecializationListPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deleteSpecialization, { isLoading: deleteLoading }] =
    useDeleteSpecializationMutation();
  const [open, setOpen] = useState<boolean>(false);
  const [spcId, setSpcId] = useState<string>('');

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
  const { data, isLoading } = useSpecializationsQuery({ ...query });

  const datas = data?.specializations;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading('Deleting.....');
    try {
      const res = await deleteSpecialization(id);

      if (res) {
        setOpen(false);
        responseMessage(res, 'Specialization Deleted Successfully');
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      render: function (data: any) {
        return data && dayjs(data).format('MMM D, YYYY hh:mm A');
      },
      sorter: true,
    },
    {
      title: 'Action',
      render: function (data: any) {
        return (
          <div className="flex items-center">
            <Link href={`/admin/specialization/update/${data?.id}`}>
              <Button
                style={{
                  margin: '0px 5px',
                }}
                className="bg-teal-700 flex items-center"
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setSpcId(data.id);
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
      <ActionBar title="Specialization List">
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
          <Link href="/admin/specialization/create">
            <Button type="primary" className="bg-hcOrange-base">
              Create
            </Button>
          </Link>
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
        dataSource={datas}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <HCModal
        title="Delete Specialization"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(spcId)}
      >
        <p className="my-5">Do you want to delete this specialization?</p>
      </HCModal>
    </div>
  );
};

export default SpecializationListPage;
