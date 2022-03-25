import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Field, Button } from 'components';
import { PaymentRecordProps } from 'core/types/payments/globals';
import { getCurrentDate, getCurrentTime } from 'core/helpers/date';

import {
  applyCurrencyMask,
  removeCurrencyMask,
  convertToDecial
} from 'core/helpers/currency';

import { addPaymentValidationSchema } from 'core/validations/addPayment';

import * as s from './styles';

type InitialFormStateProps = {
  value: string;
} & Omit<PaymentRecordProps, 'value'>;

type FormDataProps = PaymentRecordProps;

export type FormAddProps = {
  onCancel: () => void;
  onSubmit: (formData: FormDataProps) => void;
};

export default function FormAdd({ onCancel, onSubmit }: FormAddProps) {
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

  const [formAddData, setFormAddData] =
    useState<InitialFormStateProps>(initialFormState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: yupResolver(addPaymentValidationSchema)
  });

  const _onSubmit: SubmitHandler<FormDataProps> = (formData) => {
    const fullDate = `${formData.date + getCurrentTime()}`;
    const unformattedValue = removeCurrencyMask(formAddData.value);

    onSubmit({
      ...formAddData,
      ...formData,
      value: convertToDecial(unformattedValue),
      date: fullDate
    });
    setFormAddData(initialFormState);
    reset();
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
            {errors.name && (
              <s.ErrorMessage>{errors.name.message}</s.ErrorMessage>
            )}
          </s.ErrorMessageWrapper>
          <Field.FieldText
            name="date"
            label="date"
            type="date"
            min={getCurrentDate()}
            value={formAddData.date}
            onChange={(event) =>
              setFormAddData({
                ...formAddData,
                date: event.target.value
              })
            }
            register={register}
          />
          <s.ErrorMessageWrapper></s.ErrorMessageWrapper>
        </s.FormColumn>
        <s.FormColumn>
          <Field.FieldText
            name="value"
            label="value"
            type="text"
            onChange={(event) => {
              setFormAddData({ ...formAddData, value: event.target.value });
            }}
            value={applyCurrencyMask(formAddData.value)}
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.value && (
              <s.ErrorMessage>{errors.value.message}</s.ErrorMessage>
            )}
          </s.ErrorMessageWrapper>

          <Field.FieldText
            name="title"
            label="title"
            type="text"
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.title && (
              <s.ErrorMessage>{errors.title.message}</s.ErrorMessage>
            )}
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
}
