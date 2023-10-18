import { useServiceCategoriesQuery } from '@/redux/api/serviceCategoryApi';
import FormSelectField, { SelectOptions } from './FormSelectField';

type CategoryFieldProps = {
  name: string;
  label: string;
  required?: boolean;
};

const ServiceCategoryField = ({
  name,
  label,
  required,
}: CategoryFieldProps) => {
  const { data, isLoading } = useServiceCategoriesQuery({
    limit: 100,
    page: 1,
  });
  const categories = data?.serviceCategories;
  const categoryOptions = categories?.map((category: any) => {
    return {
      label: category?.categoryName,
      value: category?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={categoryOptions as SelectOptions[]}
      required={required}
    />
  );
};

export default ServiceCategoryField;
