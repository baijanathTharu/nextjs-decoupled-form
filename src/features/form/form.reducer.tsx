import * as yup from 'yup';

export const formSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export type TFormValues = {
  firstName: string;
  lastName: string;
  age: number | undefined;
};

export const initialFormFields: TFormValues = {
  age: undefined,
  firstName: '',
  lastName: '',
};

export const formReducer = (
  state: TFormValues,
  action: {
    payload: {
      data: TFormValues;
    };
    type: 'submit';
  }
): TFormValues => {
  switch (action.type) {
    case 'submit':
      console.log('submit with payload: ', action.payload);
      break;
    default:
      break;
  }
  return state;
};
