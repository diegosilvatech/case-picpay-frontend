import { Modal as AntdModal } from 'antd';
import { Text } from 'components';

import * as s from './styles';

export type ModalProps = {
  visible: boolean;
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
};

const Modal = ({ visible, title, children, onCancel }: ModalProps) => {
  return (
    <s.Wrapper aria-label="Modal component">
      <AntdModal visible={visible} onCancel={onCancel} centered footer={null}>
        <s.TitleWrapper>
          <Text type="h2" weight="semiBold" size="extraLarge">
            {title.toUpperCase()}
          </Text>
        </s.TitleWrapper>
        <s.ContentWrapper>{children}</s.ContentWrapper>
      </AntdModal>
    </s.Wrapper>
  );
};

export default Modal;
