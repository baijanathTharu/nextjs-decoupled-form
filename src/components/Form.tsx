import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className='form'>
      <div className='form-field'>
        <label>First Name</label>
        <input {...register('firstName')} />
        {errors.firstName ? (
          <div className='form-error-container'>
            <p>{errors.firstName.message}</p>
          </div>
        ) : null}
      </div>
      <div className='form-field'>
        <label>Last Name</label>
        <input {...register('lastName')} />
        {errors.lastName ? (
          <div className='form-error-container'>
            <p>{errors.lastName.message}</p>
          </div>
        ) : null}
      </div>
      <div className='form-field'>
        <label>Age</label>
        <input type='number' {...register('age')} />
        {errors.age ? (
          <div className='form-error-container'>
            <p>{errors.age.message}</p>
          </div>
        ) : null}
      </div>
      <div className='form-field'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}
