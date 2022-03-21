import { ModalBase, FormAdd } from 'components';

export type ModalAddProps = {
  visible: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

const ModalAdd = ({ visible, onCancel, onSubmit }: ModalAddProps) => (
  <ModalBase title="Adicionar pagamento" visible={visible} onCancel={onCancel}>
    <FormAdd onSubmit={onSubmit} onCancel={onCancel} />
  </ModalBase>
);

export default ModalAdd;
