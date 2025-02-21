import { UseFormRegister } from 'react-hook-form';
import { Device } from '../../../../types';

type FormFieldProps = {
  id: string;
  label: string;
  register: UseFormRegister<Device>;
};

const FormField = ({ id, label, register }: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...register(id as keyof Device)} />
    </div>
  );
};

export default FormField;
