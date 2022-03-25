import { Modal as AntdModal } from 'antd';
import { Text } from 'components';

import * as s from './styles';

export type ModalBaseProps = {
  visible: boolean;
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
};

const ModalBase = ({ visible, title, children, onCancel }: ModalBaseProps) => {
  return (
    <s.Wrapper aria-label="ModalBase component">
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

export default ModalBase;
