import { Modal, Form } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type ModalEditProps = {
  visible: boolean;
  paymentRecord: PaymentRecordProps;
  onCancel: () => void;
  onSubmit: (formData: PaymentRecordProps) => void;
};

const ModalEdit = ({
  visible,
  paymentRecord,
  onCancel,
  onSubmit
}: ModalEditProps) => {
  const handleSubmit = (formData: PaymentRecordProps) => {
    onSubmit(formData);
  };

  return (
    <Modal.ModalBase title="edit payment" visible={visible} onCancel={onCancel}>
      <Form.FormEdit
        onSubmit={handleSubmit}
        onCancel={onCancel}
        paymentRecord={paymentRecord}
      />
    </Modal.ModalBase>
  );
};

export default ModalEdit;
