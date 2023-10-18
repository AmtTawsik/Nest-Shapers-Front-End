import { useServicesQuery } from '@/redux/api/serviceApi';
import FormSelectField, { SelectOptions } from './FormSelectField';

type ServiceFieldProps = {
  name: string;
  label: string;
  required?: boolean;
};

const ServiceField = ({ name, label, required }: ServiceFieldProps) => {
  const { data, isLoading } = useServicesQuery({
    limit: 100,
    page: 1,
  });
  const services = data?.services;
  const serviceOptions = services?.map((service: any) => {
    return {
      label: service?.serviceName,
      value: service?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={serviceOptions as SelectOptions[]}
      required={required}
    />
  );
};

export default ServiceField;
