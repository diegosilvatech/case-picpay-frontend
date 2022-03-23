import { BaseModal, DeleteForm } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type DeleteModalProps = {
  visible: boolean;
  onCancel: () => void;
  paymentRecord: PaymentRecordProps;
  onSubmit: (paymentId: number) => void;
};

const DeleteModal = ({
  visible,
  paymentRecord,
  onCancel,
  onSubmit
}: DeleteModalProps) => (
  <BaseModal title="excluir pagamento" visible={visible} onCancel={onCancel}>
    <DeleteForm
      paymentRecord={paymentRecord}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  </BaseModal>
);

export default DeleteModal;
