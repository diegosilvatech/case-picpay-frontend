import { useState } from 'react';
import { Input, Button } from 'components';

import { MailIcon } from 'assets/icons';

import * as s from './styles';

export type FormDataProps = {
  name: string;
  value: number;
  date: string;
  title: string;
  isPayed: boolean;
};

export type FormAddProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

const FormAdd = ({ onSubmit, onCancel }: FormAddProps) => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    value: 0,
    date: '',
    title: '',
    isPayed: false
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
    console.log({ formData });
  };

  return (
    <s.Wrapper
      aria-label="FormAdd component"
      onSubmit={(event) => handleSubmit(event)}
    >
      <s.FormRowsWrapper>
        <s.FormColumn>
          <s.FieldWrapper>
            <Input
              label="usuário"
              name="user"
              placeholder="usuário"
              required
              icon={<MailIcon />}
              iconPosition="right"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </s.FieldWrapper>
          <s.FieldWrapper>
            <Input
              label="Data"
              name="date"
              placeholder="data"
              type="date"
              value={formData.date}
              onChange={(event) =>
                setFormData({ ...formData, date: event.target.value })
              }
            />
          </s.FieldWrapper>
        </s.FormColumn>

        <s.FormColumn>
          <s.FieldWrapper>
            <Input
              label="valor"
              name="value"
              type="number"
              placeholder="valor"
              icon={<MailIcon />}
              iconPosition="right"
              value={String(formData.value)}
              onChange={(event) =>
                setFormData({ ...formData, value: Number(event.target.value) })
              }
            />
          </s.FieldWrapper>
          <s.FieldWrapper>
            <Input
              label="título"
              name="title"
              placeholder="título"
              icon={<MailIcon />}
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

export default FormAdd;
