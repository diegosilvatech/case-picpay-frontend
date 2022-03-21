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
          <Text type="h3" weight="semiBold" size="large">
            {title}
          </Text>
        </s.TitleWrapper>
        <s.ContentWrapper>{children}</s.ContentWrapper>
      </AntdModal>
    </s.Wrapper>
  );
};

export default ModalBase;
