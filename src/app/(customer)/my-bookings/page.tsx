'use client';
import { ReloadOutlined } from '@ant-design/icons';

import ActionBar from '@/components/ui/ActionBar/ActionBar';
import HCTable from '@/components/ui/Table/HCTable';
import { useDebounced } from '@/hooks/useDebounced';

import HCModal from '@/components/ui/Modal/HCModal';
import {
  useBookingsQuery,
  useCacelBookingMutation,
} from '@/redux/api/bookingApi';
import { responseMessage } from '@/utils/responseMessage';
import { Button, Input, message } from 'antd';
import { useState } from 'react';

const CustomerBookingListPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [cancelOpen, setCancelOpen] = useState<boolean>(false);
  const [finishOpen, setFinishOpen] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<any>(null);

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
  const { data, isLoading } = useBookingsQuery({ ...query });
  const [cacelBooking] = useCacelBookingMutation();

  const bookings = data?.bookings;
  const meta = data?.meta;

  const cancelHandler = async () => {
    message.loading('Cancelling.....');
    try {
      const data = {
        bookingId: bookingData?.id,
        paymentId: bookingData?.payment.id,
      };
      console.log(data);
      const res = await cacelBooking(data);
      if (res) {
        setCancelOpen(false);
        responseMessage(res, 'Booking cancel Successfully');
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: 'Service Name',
      dataIndex: ['service', 'serviceName'],
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Time',
      dataIndex: ['slot', 'startTime'],
    },

    {
      title: 'Address',
      dataIndex: ['user', 'address'],
    },

    {
      title: 'Status',
      dataIndex: 'status',
    },

    {
      title: 'Payment Method',
      dataIndex: ['payment', 'paymentMethod'],
    },

    {
      title: 'Payment Status',
      dataIndex: ['payment', 'paymentStatus'],
    },

    {
      title: 'Action',
      render: function (data: any) {
        return (
          <div className="flex items-center">
            {data.status === 'rejected' && (
              <Button
                disabled
                style={{
                  margin: '0px 5px',
                }}
                className="bg-orange-700 flex text-white items-center"
                onClick={() => {
                  setCancelOpen(true);
                  setBookingData(data);
                }}
                type="primary"
              >
                Rejected
              </Button>
            )}
            {data.status === 'confirmed' && (
              <Button
                disabled
                style={{
                  margin: '0px 5px',
                }}
                className="bg-green-500 text-white flex items-center"
                onClick={() => {
                  setCancelOpen(true);
                  setBookingData(data);
                }}
                type="primary"
              >
                confirmed
              </Button>
            )}
            {data.status === 'pending' && (
              <Button
                style={{
                  margin: '0px 5px',
                }}
                className="bg-red-700 flex items-center"
                onClick={() => {
                  setCancelOpen(true);
                  setBookingData(data);
                }}
                type="primary"
              >
                cancel
              </Button>
            )}
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
      <ActionBar title="Services List">
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
          {/* <Link href="/admin/service/create">
            <Button type="primary" className="bg-hcOrange-base">
              Create
            </Button>
          </Link> */}
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
        dataSource={bookings}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <HCModal
        title="Cancel Booking"
        isOpen={cancelOpen}
        closeModal={() => setCancelOpen(false)}
        handleOk={() => cancelHandler()}
      >
        <p className="my-5">Do you want to cancel this booking?</p>
      </HCModal>
    </div>
  );
};

export default CustomerBookingListPage;
