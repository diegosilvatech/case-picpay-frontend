import { useState, useEffect } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Field, Button } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';
import {
  getCurrentDate,
  getSpecificDate,
  getCurrentTime
} from 'core/helpers/date';
import {
  applyCurrencyMask,
  removeCurrencyMask,
  convertToDecial
} from 'core/helpers/currency';

import * as s from './styles';

type NormalizedRecordProps = {
  value: string;
} & Omit<PaymentRecordProps, 'value'>;

type FormDataProps = PaymentRecordProps;

export type FormEditProps = {
  paymentRecord: PaymentRecordProps;
  onCancel: () => void;
  onSubmit: (formData: FormDataProps) => void;
};

const FormEdit = ({ paymentRecord, onCancel, onSubmit }: FormEditProps) => {
  const normalizedRecord = {
    ...paymentRecord,
    date: getCurrentDate(),
    value: applyCurrencyMask(String(paymentRecord.value * 100))
  };

  useEffect(() => {
    setFormEditData(normalizedRecord);
  }, [paymentRecord]);

  const [formEditData, setFormEditData] =
    useState<NormalizedRecordProps>(normalizedRecord);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>();

  const _onCancel = () => {
    onCancel();
  };

  const _onSubmit: SubmitHandler<FormDataProps> = (formData) => {
    const fullDate = `${formData.date + getCurrentTime()}`;
    const unformattedValue = removeCurrencyMask(formEditData.value);

    onSubmit({
      ...formData,
      ...formEditData,
      value: convertToDecial(unformattedValue),
      date: fullDate
    });
  };
  return (
    <s.Wrapper
      aria-label="FormEdit component"
      onSubmit={handleSubmit(_onSubmit)}
    >
      <s.FormRow>
        <s.FormColumn>
          <Field.FieldText
            name="name"
            label="name"
            type="text"
            value={formEditData.name}
            onChange={(event) =>
              setFormEditData({
                ...formEditData,
                name: event.target.value
              })
            }
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.name && <s.ErrorMessage>invalid name</s.ErrorMessage>}
          </s.ErrorMessageWrapper>
          <Field.FieldText
            name="date"
            label="date"
            type="date"
            min={getCurrentDate()}
            value={getSpecificDate(formEditData.date)}
            onChange={(event) =>
              setFormEditData({
                ...formEditData,
                date: event.target.value
              })
            }
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
            onChange={(event) => {
              setFormEditData({ ...formEditData, value: event.target.value });
            }}
            value={applyCurrencyMask(formEditData.value)}
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.value && <s.ErrorMessage>invalid value</s.ErrorMessage>}
          </s.ErrorMessageWrapper>

          <Field.FieldText
            name="title"
            label="title"
            type="text"
            value={formEditData.title}
            onChange={(event) =>
              setFormEditData({
                ...formEditData,
                title: event.target.value
              })
            }
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.title && <s.ErrorMessage>invalid title</s.ErrorMessage>}
          </s.ErrorMessageWrapper>
        </s.FormColumn>
      </s.FormRow>
      <s.ButtonsWrapper>
        <Button fullWidth variant="secondary" onClick={_onCancel}>
          cancelar
        </Button>
        <Button type="submit" fullWidth>
          editar
        </Button>
      </s.ButtonsWrapper>
    </s.Wrapper>
  );
};

export default FormEdit;
