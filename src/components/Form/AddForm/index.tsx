import { useState } from 'react';

import { InputText, Button } from 'components';
import { MailIcon, DollarIcon, BadgeIcon } from 'assets/icons';

import { PaymentRecordProps } from 'core/types/payments/globals';
import { getCurrentDate, getCurrentTime } from 'core/helpers/date';
import {
  applyCurrencyMask,
  removeCurrencyMask,
  convertToDecial
} from 'core/helpers/currency';

import * as s from './styles';

export type AddFormProps = {
  onCancel: () => void;
  onSubmit: (formData: PaymentRecordProps) => void;
};

type InitialFormStateProps = {
  value: string;
} & Omit<PaymentRecordProps, 'value'>;

const AddForm = ({ onSubmit, onCancel }: AddFormProps) => {
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

  const [formData, setFormData] =
    useState<InitialFormStateProps>(initialFormState);

  const handleReset = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullDate = `${formData.date + getCurrentTime()}`;
    const unformattedValue = removeCurrencyMask(formData.value);

    onSubmit({
      ...formData,
      value: convertToDecial(unformattedValue),
      date: fullDate
    });
    handleReset();
  };

  return (
    <s.Wrapper
      aria-label="AddForm component"
      onSubmit={(event) => handleSubmit(event)}
    >
      <s.FormRowsWrapper>
        <s.FormColumn>
          <s.FieldWrapper>
            <InputText
              label="Nome"
              name="user"
              placeholder="Nome"
              icon={<MailIcon />}
              iconPosition="right"
              value={formData.name}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  name: event.target.value
                })
              }
            />
          </s.FieldWrapper>
          <s.FieldWrapper>
            <InputText
              label="Data"
              name="date"
              placeholder="data"
              type="date"
              min={getCurrentDate()}
              value={formData.date}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  date: event.target.value
                })
              }
            />
          </s.FieldWrapper>
        </s.FormColumn>

        <s.FormColumn>
          <s.FieldWrapper>
            <InputText
              label="Valor"
              name="value"
              icon={<DollarIcon />}
              iconPosition="right"
              value={applyCurrencyMask(formData.value)}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  value: applyCurrencyMask(event.target.value)
                })
              }
            />
          </s.FieldWrapper>
          <s.FieldWrapper>
            <InputText
              label="Título"
              name="title"
              placeholder="Título"
              icon={<BadgeIcon />}
              iconPosition="right"
              value={formData.title}
              onChange={(event) =>
                setFormData({ ...formData, title: event.target.value })
              }
            />
          </s.FieldWrapper>
        </s.FormColumn>
      </s.FormRowsWrapper>

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

export default AddForm;
