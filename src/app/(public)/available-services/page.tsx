'use client';

import ServiceCard from '@/components/common/ServiceCard';
import HCLoading from '@/components/ui/Loading/HCLoading';
import { useDebounced } from '@/hooks/useDebounced';
import { useAvailableServicesQuery } from '@/redux/api/availableServiceApi';
import { useServiceCategoriesQuery } from '@/redux/api/serviceCategoryApi';
import { getTodaysDate } from '@/utils/getTodaysDate';
import type { PaginationProps } from 'antd';
import { Input, InputNumber, Pagination, Select, Space } from 'antd';
import { useState } from 'react';

const { Search } = Input;

function AvailableServicePage() {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  const [minPrice, setMinPrice] = useState<string | number>('');
  const [maxPrice, setMaxPrice] = useState<string | number>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryId, setCategoryId] = useState('');
  const [reset, setReset] = useState('');

  query['limit'] = size;
  query['page'] = page;
  // query['sortBy'] = sortBy;
  // query['sortOrder'] = sortOrder;
  if (categoryId) {
    query['categoryId'] = categoryId;
  }
  if (minPrice) {
    query['minPrice'] = minPrice;
  }
  if (maxPrice) {
    query['maxPrice'] = maxPrice;
  }
  query['date'] = getTodaysDate();

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query['searchTerm'] = debouncedTerm;
  }

  const { data, isLoading } = useAvailableServicesQuery({ ...query });

  const availableServices = data?.availableServices.filter(
    // @ts-ignore
    (service): any => service.isAvailable === true
  );
  const meta = parseInt(data?.meta.total);

  const { data: categoryData, isLoading: categoryLoadinding } =
    useServiceCategoriesQuery({
      limit: 100,
      page: 1,
    });
  const categories = categoryData?.serviceCategories;
  const categoryOptions = categories?.map((category: any) => {
    return {
      label: category?.categoryName,
      value: category?.id,
    };
  });

  const onCategoryChange = (value: string) => {
    setCategoryId(value);
  };

  const onMInPriceChange = (value: number | string | null) => {
    const v = Number(value);
    setMinPrice(v);
  };

  const onMaxPriceChange = (value: number | string | null) => {
    const v = Number(value);
    setMaxPrice(v);
  };

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    setPage(pageNumber);
  };

  // const resetFilters = () => {
  //   delete query.searchTerm;
  //   delete query.categoryId;
  //   delete query.minPrice;
  //   delete query.maxPrice;

  //   setReset('reset');
  // };

  if (isLoading) {
    return <HCLoading />;
  }

  return (
    <div className="bg-white">
      <div className="py-24 md:py-24 lg:py-24 mx-auto w-full max-w-7xl px-5 md:px-10 bg-white">
        <div className="flex-col flex items-center">
          <div className="max-w-[800px] text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Our Comprehensive Services Portfolio
            </h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-hcOrange-base font-semibold">
                Explore the Range of Expert House Servicing Solutions We Offer
              </p>
            </div>
          </div>
          <div className="bg-teal-50 w-full mb-14 px-12 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
            <Search
              placeholder="input service name"
              enterButton="Search"
              size="large"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <Select
              showSearch
              placeholder="Select a category"
              optionFilterProp="children"
              onChange={onCategoryChange}
              size="large"
              options={categoryOptions}
            />
            <Space wrap>
              <span>Filter By Price:</span>
              <InputNumber
                size="large"
                onChange={onMInPriceChange}
                placeholder="Min Price"
              />
              <InputNumber
                size="large"
                placeholder="Max Price"
                onChange={onMaxPriceChange}
              />
            </Space>
            {/* <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: '0px 5px' }}
              className=" bg-teal-700 flex items-center max-w-[80px]"
            >
              Reset
              <ReloadOutlined />
            </Button> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12 align-items-start">
            {/* @ts-ignore */}
            {availableServices?.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-6">
            <Pagination defaultCurrent={1} total={20} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableServicePage;
