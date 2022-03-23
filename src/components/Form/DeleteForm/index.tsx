import { Text, Button } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';
import { formatDate } from 'core/helpers/date';
import { formatCurrency } from 'core/helpers/currency';

import * as s from './styles';

export type DeleteFormProps = {
  paymentRecord: PaymentRecordProps;
  onCancel: () => void;
  onSubmit: (paymentId: number) => void;
};

const DeleteForm = ({ paymentRecord, onCancel, onSubmit }: DeleteFormProps) => {
  return (
    <s.Wrapper aria-label="DeleteForm component">
      <s.WarningWrapper>
        <s.WarningMessage>
          <Text type="span">{`Você está certo de que realmente deseja`}</Text>
          <Text
            type="span"
            weight="semiBold"
            color="error"
            isUpperCase
          >{` excluir`}</Text>
          <Text type="span">{` o pagamento de`}</Text>
          <Text type="span" weight="semiBold">{` ${paymentRecord.name}`}</Text>
          <Text type="span">?</Text>

          <Text type="p" opacity="smooth" size="small">
            Essa ação não poderá ser desfeita no futuro!
          </Text>
        </s.WarningMessage>
      </s.WarningWrapper>

      <s.PaymentInfoWrapper>
        <s.InfoLabelWrapper>
          <Text type="span" weight="semiBold">
            Nome:
          </Text>
          <Text type="span">{` ${paymentRecord.name}`}</Text>
        </s.InfoLabelWrapper>
        <s.InfoLabelWrapper>
          <Text type="span" weight="semiBold">
            Data:
          </Text>
          <Text type="span">{` ${formatDate(paymentRecord.date)}`}</Text>
        </s.InfoLabelWrapper>
        <s.InfoLabelWrapper>
          <Text type="span" weight="semiBold">
            Valor:
          </Text>
          <Text type="span">{` ${formatCurrency(paymentRecord.value)}`}</Text>
        </s.InfoLabelWrapper>
      </s.PaymentInfoWrapper>

      <s.ButtonsWrapper>
        <Button fullWidth variant="secondary" onClick={onCancel}>
          cancelar
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="error"
          onClick={() => onSubmit(paymentRecord.id)}
        >
          excluir
        </Button>
      </s.ButtonsWrapper>
    </s.Wrapper>
  );
};

export default DeleteForm;
