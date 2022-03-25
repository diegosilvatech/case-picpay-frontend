import * as yup from 'yup';

export const addPaymentValidationSchema = yup
  .object({
    name: yup.string().trim().required('name is required'),
    value: yup
      .string()
      .test('match', 'a valid value is required', function (valueConfirmation) {
        return valueConfirmation !== 'R$ 0,00';
      })
      .required('value is required'),
    title: yup.string().min(3).required()
  })
  .required();
