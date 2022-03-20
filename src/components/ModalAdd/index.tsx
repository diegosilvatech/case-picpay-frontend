import { ModalBase } from 'components';

export type ModalAddProps = {
  visible: boolean;
  onClose: () => void;
};

const ModalAdd = ({ visible, onClose }: ModalAddProps) => (
  <ModalBase title="Adicionar pagamento" visible={visible} onClose={onClose}>
    <h1>add</h1>
  </ModalBase>
);

export default ModalAdd;
