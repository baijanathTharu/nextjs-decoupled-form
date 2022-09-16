import {
  TFormValues,
  formReducer,
  formSchema,
  initialFormFields,
} from './form.reducer';

import { useForm } from 'react-hook-form';
import { useReducer } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export default function FormComponent() {
  const [formFields, dispatch] = useReducer(formReducer, initialFormFields);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit((data) => {
    dispatch({
      type: 'submit',
      payload: { data },
    });
  });

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
