import { useForm, SubmitHandler } from 'react-hook-form';

import { Field, Button } from 'components';
import { PaymentRecordProps } from 'core/types/payments/globals';
import { getCurrentDate, getCurrentTime } from 'core/helpers/date';

import * as s from './styles';

type InitialFormStateProps = {
  value: string;
} & Omit<PaymentRecordProps, 'value'>;

type FormDataProps = PaymentRecordProps;

export type FormAddProps = {
  onCancel: () => void;
  onSubmit: (formData: FormDataProps) => void;
};

const FormAdd = ({ onCancel, onSubmit }: FormAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>();

  const initialFormState: InitialFormStateProps = {
    id: 0,
    name: '',
    username: 'diegosilvatech',
    title: '',
    value: '',
    date: getCurrentDate(),
    image:
      'https://d1fdloi71mui9q.cloudfront.net/xDiFfl33T8CKfh4oT1RP_gw8aK99eof1l95P0',
    isPayed: false
  };

  const _onSubmit: SubmitHandler<FormDataProps> = (formData) => {
    onSubmit({ ...initialFormState, ...formData });
  };

  return (
    <s.Wrapper
      aria-label="FormAdd component"
      onSubmit={handleSubmit(_onSubmit)}
    >
      <s.FormRow>
        <s.FormColumn>
          <Field.FieldText
            name="name"
            label="name"
            type="text"
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.name && <s.ErrorMessage>invalid name</s.ErrorMessage>}
          </s.ErrorMessageWrapper>
          <Field.FieldText
            name="date"
            label="date"
            type="date"
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.date && <s.ErrorMessage>invalid date</s.ErrorMessage>}
          </s.ErrorMessageWrapper>
        </s.FormColumn>
        <s.FormColumn>
          <Field.FieldText
            name="value"
            label="value"
            type="text"
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.value && <s.ErrorMessage>invalid value</s.ErrorMessage>}
          </s.ErrorMessageWrapper>

          <Field.FieldText
            name="title"
            label="title"
            type="text"
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.title && <s.ErrorMessage>invalid title</s.ErrorMessage>}
          </s.ErrorMessageWrapper>
        </s.FormColumn>
      </s.FormRow>
      <s.ButtonsWrapper>
        <Button fullWidth variant="secondary" onClick={onCancel}>
          cancelar
        </Button>
        <Button type="submit" fullWidth>
          adicionar
        </Button>
      </s.ButtonsWrapper>
    </s.Wrapper>
  );
};

export default FormAdd;
