'use client';

import { getErrorMessageByPropertyName } from '@/utils/schema-validator';
import { Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

interface IInput {
  type?: string;
  name: string;
  label?: string;
  size?: 'large' | 'small';
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  required?: boolean;
}

function FormInput({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}: IInput) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {required ? <span style={{ color: 'red' }}>*</span> : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === 'password' ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              value={value ? value : field.value}
              placeholder={placeholder}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              value={value ? value : field.value}
              placeholder={placeholder}
            />
          )
        }
      />
      <small style={{ color: 'red' }}>{errorMessage}</small>
    </>
  );
}

export default FormInput;
