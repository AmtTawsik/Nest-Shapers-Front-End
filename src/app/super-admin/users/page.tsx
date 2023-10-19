'use client';
import { ReloadOutlined } from '@ant-design/icons';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCTable from '@/components/ui/Table/HCTable';
import { useDebounced } from '@/hooks/useDebounced';

import HCModal from '@/components/ui/Modal/HCModal';
import { useUpdateUserMutation, useUsersQuery } from '@/redux/api/userApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Input, message } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

const SAUsersListPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [makeAdminOpen, setMakeAdminOpen] = useState<boolean>(false);
  const [makeUserOpen, setMakeUserOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);

  const [updateUser] = useUpdateUserMutation();

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

  const { data, isLoading } = useUsersQuery({ ...query });

  const users = data?.users;
  const meta = data?.meta;

  const madkeAdminHandler = async () => {
    message.loading('Creating...');
    try {
      console.log(userData);
      const updatedData = {
        role: 'admin',
      };
      const id = userData?.id;
      const res = await updateUser({ id, body: updatedData });
      if (res) {
        setMakeAdminOpen(false);
        responseMessage(res, 'Role changed to admin Successfully');
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const makeUserHandler = async () => {
    message.loading('Creating...');
    try {
      console.log(userData);
      const updatedData = {
        role: 'customer',
      };
      const id = userData?.id;
      const res = await updateUser({ id, body: updatedData });
      if (res) {
        setMakeAdminOpen(false);
        responseMessage(res, 'Role changed to coustomer Successfully');
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },

    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Phone',
      dataIndex: 'contactNumber',
    },

    {
      title: 'Action',
      render: function (data: any) {
        return (
          <div className="flex items-center">
            <Button
              style={{
                margin: '0px 5px',
              }}
              className="bg-red-700 flex items-center"
              onClick={() => {
                setMakeAdminOpen(true);
                setUserData(data);
              }}
              type="primary"
            >
              Make Admin
            </Button>

            <Button
              onClick={() => {
                setMakeUserOpen(true);
                setUserData(data);
              }}
              type="primary"
              className="flex items-center bg-teal-700"
              danger
            >
              Make Customer
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
      <ActionBar title="Users List">
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
          <Link href="/super-admin/admin/create">
            <Button type="primary" className="bg-hcOrange-base">
              Create Admin
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
        dataSource={users}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <HCModal
        title="Make Admin"
        isOpen={makeAdminOpen}
        closeModal={() => setMakeAdminOpen(false)}
        handleOk={() => madkeAdminHandler()}
      >
        <p className="my-5">Do you want to make this user admin?</p>
      </HCModal>
      <HCModal
        title="Make User"
        isOpen={makeUserOpen}
        closeModal={() => setMakeUserOpen(false)}
        handleOk={() => makeUserHandler()}
      >
        <p className="my-5">Do you want to make this user a Customer?</p>
      </HCModal>
    </div>
  );
};

export default SAUsersListPage;
