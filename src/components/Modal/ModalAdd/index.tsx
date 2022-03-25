import { ModalBase, Form } from 'components';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type ModalAddProps = {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (formData: PaymentRecordProps) => void;
};

const ModalAdd = ({ visible, onCancel, onSubmit }: ModalAddProps) => {
  const handleSubmit = (formData: PaymentRecordProps) => {
    onSubmit(formData);
  };

  return (
    <ModalBase
      title="Adicionar pagamento"
      visible={visible}
      onCancel={onCancel}
    >
      <Form.FormAdd onSubmit={handleSubmit} onCancel={onCancel} />
    </ModalBase>
  );
};

export default ModalAdd;
