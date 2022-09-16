import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
};

export default function FormComponent() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className='form'>
      <div className='form-field'>
        <label>First Name</label>
        <input {...register('firstName')} />
      </div>
      <div className='form-field'>
        <label>Last Name</label>
        <input {...register('lastName')} />
      </div>
      <div className='form-field'>
        <label>Age</label>
        <input type='number' {...register('age')} />
      </div>
      <div className='form-field'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}
