import { Modal, Form } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type ModalDeleteProps = {
  visible: boolean;
  paymentRecord: PaymentRecordProps;
  onCancel: () => void;
  onSubmit: () => void;
};

const ModalDelete = ({
  visible,
  paymentRecord,
  onCancel,
  onSubmit
}: ModalDeleteProps) => (
  <Modal.ModalBase title="delete payment" visible={visible} onCancel={onCancel}>
    <Form.FormDelete
      paymentRecord={paymentRecord}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  </Modal.ModalBase>
);

export default ModalDelete;
