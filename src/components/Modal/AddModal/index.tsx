import { BaseModal, Form } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type AddModalProps = {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (formData: PaymentRecordProps) => void;
};

const AddModal = ({ visible, onCancel, onSubmit }: AddModalProps) => {
  const handleSubmit = (formData: PaymentRecordProps) => {
    onSubmit(formData);
  };

  return (
    <BaseModal
      title="Adicionar pagamento"
      visible={visible}
      onCancel={onCancel}
    >
      <Form.FormAdd onSubmit={handleSubmit} onCancel={onCancel} />
    </BaseModal>
  );
};

export default AddModal;
