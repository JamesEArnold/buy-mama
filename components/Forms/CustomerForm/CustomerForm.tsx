import { ReactElement, useState } from 'react';
import { ValidationRule, useForm } from 'react-hook-form';
import { FormInput } from '@/components/Forms/GenericForm/FormInput';
import { Places } from '@/components/Forms/CustomerForm/PlacesAutoComplete';

export type CustomerFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  dueDate: Date;
  showerDate?: Date;
};

export const emailValidationPattern: ValidationRule<RegExp> = {
  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/ig,
  message: 'Enter a valid email address.',
};

export const dateValidationPattern = {
  value: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/,
  message: 'Enter a valid date in MM/DD/YYYY',
} as ValidationRule<RegExp>;

export const CustomerForm = (): ReactElement => {
  const [ dueDateType, setDueDateType ] = useState<'date' | 'text'>('text');
  const [ showerDateType, setShowerDateType ] = useState<'date' | 'text'>('text');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormFields>();

  const onSubmit = handleSubmit((data: CustomerFormFields) => {
    console.log(JSON.stringify(data));
  });

  return (
    <form onSubmit={onSubmit}>
      <FormInput<CustomerFormFields>
        id="firstName"
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        rules={{ required: 'Please enter your first name.' }}
        className="mb-2"
        register={register}
        errors={errors}
      />
      <FormInput<CustomerFormFields>
        id="lastName"
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
        className="mb-2"
        register={register}
        rules={{ required: 'Please enter your last name.' }}
        errors={errors}
      />
      <FormInput<CustomerFormFields>
        id="email"
        type="email"
        name="email"
        label="Email Address"
        placeholder="Email Address"
        className="mb-2"
        register={register}
        rules={{
          required: 'Please enter a valid email address.',
          pattern: emailValidationPattern,
        }}
        errors={errors}
      />
      <Places<CustomerFormFields>
        register={register}
        errors={errors}
        rules={{
          required: 'Please enter a valid shipping address',
        }}
      />
      <FormInput<CustomerFormFields>
        id="dueDate"
        type={dueDateType}
        name="dueDate"
        label="dueDate"
        placeholder="Due Date"
        className="mb-2"
        register={register}
        rules={{
          required: 'Please enter a valid date',
          pattern: dateValidationPattern,
        }}
        errors={errors}
        min={new Date().toLocaleDateString('en-CA')}
        onFocus={() => setDueDateType('date')}
        onBlur={() => setDueDateType('text')}
      />
      <FormInput<CustomerFormFields>
        id="showerDate"
        type={showerDateType}
        name="showerDate"
        label="showerDate"
        placeholder="Shower Date"
        className="mb-2"
        register={register}
        rules={{
          required: 'Please enter a valid date',
          pattern: dateValidationPattern,
        }}
        errors={errors}
        min={new Date().toLocaleDateString('en-CA')}
        onFocus={() => setShowerDateType('date')}
        onBlur={() => setShowerDateType('text')}
      />
      <button
        className="mt-4 transform duration-200 py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 focus:outline-none disabled:opacity-50 focus:translate-y-1 hover:-translate-y-1"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
