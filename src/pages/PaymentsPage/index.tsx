import { useContext, useState, useEffect } from 'react';

import { AuthContext, PaymentsProvider, PaymentsContext } from 'contexts';

import { Container, Menu, Text, Button, Table, AddModal } from 'components';
import { PaymentRecordProps } from 'core/types/payments/globals';

import * as s from './styles';

export default function PaymentsPage() {
  const { logout, user } = useContext(AuthContext);
  const { getPayments, paymentRecords, addPayment } =
    useContext(PaymentsContext);

  console.log({ paymentRecords });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const handlePageChange = (currentPage: number, pageSize: number) => {
    setCurrentPage(currentPage), setPageSize(pageSize);
  };

  const handleSubmitAddPayment = (addPaymentData: PaymentRecordProps) => {
    addPayment(addPaymentData);
    setShowAddModal(false);
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <PaymentsProvider>
      <AddModal
        visible={showAddModal}
        onCancel={() => setShowAddModal(false)}
        onSubmit={handleSubmitAddPayment}
      />
      <s.Wrapper>
        <Menu user={user} onLogout={logout} />
        <Container>
          <s.HeaderWrapper>
            <Text type="h1" size="extraLarge" weight="semiBold">
              Meus pagamentos
            </Text>
            <Button onClick={() => setShowAddModal(true)}>
              Adicionar pagamento
            </Button>
          </s.HeaderWrapper>

          <s.TableWrapper>
            <Table
              data={paymentRecords}
              currentPage={currentPage}
              pageSize={pageSize}
              handlePageChange={handlePageChange}
              total={paymentRecords.length}
            />
          </s.TableWrapper>
        </Container>
      </s.Wrapper>
    </PaymentsProvider>
  );
}
