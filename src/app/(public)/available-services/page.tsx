'use client';

import ServiceCard from '@/components/common/ServiceCard';
import { Input, InputNumber, Pagination, Select, Space } from 'antd';

const { Search } = Input;

function AvailableServicePage() {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
              // loading
            />
            <Select
              showSearch
              placeholder="Select a category"
              optionFilterProp="children"
              onChange={onChange}
              size="large"
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
            <Space wrap>
              <span>Filter By Price:</span>
              <InputNumber
                size="large"
                min={500}
                max={100000}
                defaultValue={500}
                placeholder="Min Pirce"
              />
              <InputNumber
                size="large"
                min={500}
                max={100000}
                placeholder="Max Price"
              />
            </Space>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
          <div className="mt-6">
            <Pagination
              total={85}
              showTotal={(total) => `Total ${total} items`}
              defaultPageSize={20}
              defaultCurrent={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableServicePage;
