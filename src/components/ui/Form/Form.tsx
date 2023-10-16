'use client';
import { useEffect } from 'react';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FormProps = {
  children?: React.ReactElement | React.ReactNode;
  submitHandler: SubmitHandler<any>;
  isReset?: boolean;
} & FormConfig;

function Form({
  children,
  submitHandler,
  defaultValues,
  isReset = true,
  resolver,
}: FormProps) {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig['defaultValues'] = defaultValues;
  if (!!resolver) formConfig['resolver'] = resolver;

  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    isReset && reset();
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default Form;
