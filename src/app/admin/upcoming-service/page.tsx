'use client';
import { EditOutlined, ReloadOutlined } from '@ant-design/icons';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCTable from '@/components/ui/Table/HCTable';
import { useDebounced } from '@/hooks/useDebounced';

import { useUpcomingServicesQuery } from '@/redux/api/upcomingServiceApi';
import { Button, Input } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

const UpcomingServiceListPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

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
  const { data, isLoading } = useUpcomingServicesQuery({ ...query });

  const upcomingServices = data?.upcomingServices;
  const meta = data?.meta;

  const columns = [
    {
      title: 'Service Name',
      dataIndex: ['service', 'serviceName'],
    },
    {
      title: 'Category',
      dataIndex: ['service', 'serviceCategory', 'categoryName'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: function (data: any) {
        let value;
        if (data === true) {
          value = 'Upcoming';
        } else {
          value = 'Available';
        }

        return value;
      },
    },

    {
      title: 'Action',
      render: function (data: any) {
        return (
          <div className="flex items-center">
            <Link href={`/admin/upcoming-service/update/${data?.id}`}>
              <Button
                style={{
                  margin: '0px 5px',
                }}
                className="bg-teal-700 flex items-center"
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
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
      <ActionBar title="Upcoming Service List">
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
          <Link href="/admin/upcoming-service/create">
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
        dataSource={upcomingServices}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default UpcomingServiceListPage;
