import { Text, Button } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';
import { formatDate } from 'core/helpers/date';
import { formatCurrency } from 'core/helpers/currency';

import * as s from './styles';

export type FormDeleteProps = {
  paymentRecord: PaymentRecordProps;
  onCancel: () => void;
  onSubmit: () => void;
};

export default function FormDelete({
  paymentRecord,
  onCancel,
  onSubmit
}: FormDeleteProps) {
  return (
    <s.Wrapper aria-label="FormDelete component">
      <s.WarningWrapper>
        <s.WarningMessage>
          <Text type="span">{`Are you sure you really want`}</Text>
          <Text
            type="span"
            weight="semiBold"
            color="danger"
            isUpperCase
          >{` delete`}</Text>
          <Text type="span">{` the payment of`}</Text>
          <Text type="span" weight="semiBold">{` ${paymentRecord.name}`}</Text>
          <Text type="span">?</Text>

          <Text type="p" opacity="smooth" size="small">
            This action cannot be undone in the future!
          </Text>
        </s.WarningMessage>
      </s.WarningWrapper>

      <s.PaymentInfoWrapper>
        <s.InfoLabelWrapper>
          <Text type="span" weight="semiBold">
            Name:
          </Text>
          <Text type="span">{` ${paymentRecord.name}`}</Text>
        </s.InfoLabelWrapper>
        <s.InfoLabelWrapper>
          <Text type="span" weight="semiBold">
            Date:
          </Text>
          <Text type="span">{` ${formatDate(paymentRecord.date)}`}</Text>
        </s.InfoLabelWrapper>
        <s.InfoLabelWrapper>
          <Text type="span" weight="semiBold">
            Value:
          </Text>
          <Text type="span">{` ${formatCurrency(paymentRecord.value)}`}</Text>
        </s.InfoLabelWrapper>
      </s.PaymentInfoWrapper>

      <s.ButtonsWrapper>
        <Button fullWidth variant="secondary" onClick={onCancel}>
          cancel
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="danger"
          onClick={() => onSubmit()}
        >
          delete
        </Button>
      </s.ButtonsWrapper>
    </s.Wrapper>
  );
}
