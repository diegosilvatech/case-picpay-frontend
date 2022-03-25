import { ModalBase, Form } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type ModalDeleteProps = {
  visible: boolean;
  onCancel: () => void;
  paymentRecord: PaymentRecordProps;
  onSubmit: () => void;
};

const ModalDelete = ({
  visible,
  paymentRecord,
  onCancel,
  onSubmit
}: ModalDeleteProps) => (
  <ModalBase title="excluir pagamento" visible={visible} onCancel={onCancel}>
    <Form.FormDelete
      paymentRecord={paymentRecord}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  </ModalBase>
);

export default ModalDelete;
