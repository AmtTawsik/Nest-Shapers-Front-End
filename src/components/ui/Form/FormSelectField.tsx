'use client';

import { getErrorMessageByPropertyName } from '@/utils/schema-validator';
import { Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: 'large' | 'small';
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
  required?: boolean;
};

const FormSelectField = ({
  name,
  size = 'large',
  value,
  placeholder = 'select',
  options,
  label,
  defaultValue,
  required,
  handleChange,
}: SelectFieldProps) => {
  // const { control } = useFormContext();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {required ? <span style={{ color: 'red' }}>*</span> : null}
      <span className=" mb-1 text-base text-hcGrey-dark">
        {' '}
        {label ? label : null}
      </span>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: '100%' }}
            placeholder={placeholder}
          />
        )}
      />
      <small style={{ color: 'red' }}>{errorMessage}</small>
    </>
  );
};

export default FormSelectField;
