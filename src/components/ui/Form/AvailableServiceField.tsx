import { useAvailableServicesQuery } from '@/redux/api/availableServiceApi';
import FormSelectField, { SelectOptions } from './FormSelectField';

type AvailableServiceFieldProps = {
  name: string;
  label: string;
  required?: boolean;
};

const AvailableServiceField = ({
  name,
  label,
  required,
}: AvailableServiceFieldProps) => {
  const { data, isLoading } = useAvailableServicesQuery({
    limit: 100,
    page: 1,
  });
  const services = data?.availableServices;
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

export default AvailableServiceField;
