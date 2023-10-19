'use client';

import ServiceCard from '@/components/common/ServiceCard';
import HCLoading from '@/components/ui/Loading/HCLoading';
import { useAvailableServicesQuery } from '@/redux/api/availableServiceApi';
import { useServiceCategoryQuery } from '@/redux/api/serviceCategoryApi';

type IDProps = {
  params: any;
};

function ServiceByCategoryPage({ params }: IDProps) {
  const { categoryId } = params;

  const { data, isLoading } = useAvailableServicesQuery({
    categoryId: categoryId,
  });

  const availableServices = data?.availableServices;

  const { data: serviceData } = useServiceCategoryQuery(categoryId);

  if (isLoading) {
    return <HCLoading />;
  }

  return (
    <div className="bg-white">
      <div className="py-24 md:py-24 lg:py-24 mx-auto w-full max-w-7xl px-5 md:px-10 bg-white">
        <div className="flex-col flex items-center">
          <div className="max-w-[800px] text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-bold text-3xl text-teal-950 md:text-5xl">
              Our Comprehensive Services Portfolio for{' '}
              {serviceData?.data?.categoryName}
            </h2>
            <div className="mx-auto mt-4 max-w-[528px]">
              <p className="text-hcOrange-base font-semibold">
                Explore the Range of Expert House Servicing Solutions We Offer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-6 md:mb-10 lg:mb-12 align-items-start">
            {/* @ts-ignore */}
            {availableServices?.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceByCategoryPage;
