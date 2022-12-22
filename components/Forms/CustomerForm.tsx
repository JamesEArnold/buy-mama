import { FormInput } from '@/components/Forms/FormInput';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

export type NameFormFields = {
  fullName: string,
}

export const CustomerForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameFormFields>();

  const onSubmit = handleSubmit(() => console.log('poop'));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormInput<NameFormFields>
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="Full Name"
          id="fullNameFormField"
          register={register}
          errors={errors}
          className="bg-white rounded-lg focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
        />
        <button
          type="submit"
        >
          Pick Your Gifts
        </button>
      </form>
    </div>
  );
};
