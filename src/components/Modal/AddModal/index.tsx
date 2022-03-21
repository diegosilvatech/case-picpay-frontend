import { BaseModal, AddForm } from 'components';
import { AddFormDataProps } from 'components/Form/AddForm';

export type AddModalProps = {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (formData: AddFormDataProps) => void;
};

const AddModal = ({ visible, onCancel, onSubmit }: AddModalProps) => (
  <BaseModal title="Adicionar pagamento" visible={visible} onCancel={onCancel}>
    <AddForm onSubmit={onSubmit} onCancel={onCancel} />
  </BaseModal>
);

export default AddModal;
