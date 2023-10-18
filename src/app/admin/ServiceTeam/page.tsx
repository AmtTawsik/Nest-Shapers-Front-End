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
  useDeleteServiceTeamMutation,
  useServiceTeamsQuery,
} from '@/redux/api/serviceTeamApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Input, message } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

const ServiceTeamListPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deleteServiceTeam, { isLoading: deleteLoading }] =
    useDeleteServiceTeamMutation();
  const [open, setOpen] = useState<boolean>(false);
  const [teamId, setTeamId] = useState<string>('');

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
  const { data, isLoading } = useServiceTeamsQuery({ ...query });

  const serviceTeams = data?.serviceTeams;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading('Deleting.....');
    try {
      const res = await deleteServiceTeam(id);
      if (res) {
        setOpen(false);
        responseMessage(res, 'Service Team is Deleted Successfully');
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: 'Team Title',
      dataIndex: 'teamName',
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
            <Link href={`/admin/ServiceTeam/update/${data?.id}`}>
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
                setTeamId(data?.id);
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
      <ActionBar title="Service Team List">
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
          <Link href="/admin/ServiceTeam/create">
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
        dataSource={serviceTeams}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <HCModal
        title="Delete Service Team"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(teamId)}
      >
        <p className="my-5">Do you want to delete this Service Team?</p>
      </HCModal>
    </div>
  );
};

export default ServiceTeamListPage;
