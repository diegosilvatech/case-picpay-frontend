import { useContext, useState, useEffect } from 'react';

import { AuthContext, PaymentsProvider, PaymentsContext } from 'contexts';

import { Container, Menu, Text, Button, Table, Modal } from 'components';
import { PaymentRecordProps } from 'core/types/payments/globals';

import * as s from './styles';

export default function PaymentsPage() {
  const initialState = {
    id: 0,
    name: '',
    username: 'diegosilvatech',
    title: '',
    value: 0,
    date: '',
    image:
      'https://d1fdloi71mui9q.cloudfront.net/xDiFfl33T8CKfh4oT1RP_gw8aK99eof1l95P0',
    isPayed: false
  };
  const { logout, user } = useContext(AuthContext);
  const {
    getPayments,
    addPayment,
    editPayment,
    deletePayment,
    paymentRecords
  } = useContext(PaymentsContext);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);

  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [selectedPaymentToEdit, setSelectedPaymentToEdit] =
    useState<PaymentRecordProps>(initialState);
  const [selectedPaymentToDelete, setSelectedPaymentToDelete] =
    useState<PaymentRecordProps>(initialState);

  useEffect(() => {
    getPayments();
  }, []);

  const handlePageChange = (currentPage: number, pageSize: number) => {
    setCurrentPage(currentPage), setPageSize(pageSize);
  };

  const handleClickEditButton = (record: PaymentRecordProps) => {
    setShowModalEdit(true);
    setSelectedPaymentToEdit(record);
  };

  const handleClickDeleteButton = (record: PaymentRecordProps) => {
    setShowModalDelete(true);
    setSelectedPaymentToDelete(record);
  };

  const handleSubmitAddPayment = (addPaymentData: PaymentRecordProps) => {
    addPayment(addPaymentData);
    setShowModalAdd(false);
  };

  const handleSubmitEditPayment = (editPaymentData: PaymentRecordProps) => {
    editPayment(editPaymentData.id, editPaymentData);
    setShowModalEdit(false);
  };

  const handleSubmitDeletePayment = () => {
    const paymentFoudToBeDeleted: PaymentRecordProps[] = paymentRecords.filter(
      (payment) => payment.id === selectedPaymentToDelete.id
    );
    deletePayment(paymentFoudToBeDeleted[0].id);
    setShowModalDelete(false);
  };

  return (
    <PaymentsProvider>
      <Modal.ModalAdd
        visible={showModalAdd}
        onCancel={() => setShowModalAdd(false)}
        onSubmit={handleSubmitAddPayment}
      />
      <Modal.ModalEdit
        visible={showModalEdit}
        onCancel={() => setShowModalEdit(false)}
        paymentRecord={selectedPaymentToEdit}
        onSubmit={handleSubmitEditPayment}
      />
      <Modal.ModalDelete
        visible={showModalDelete}
        onCancel={() => setShowModalDelete(false)}
        paymentRecord={selectedPaymentToDelete}
        onSubmit={handleSubmitDeletePayment}
      />
      <s.Wrapper>
        <Menu user={user} onLogout={logout} />
        <Container>
          <s.HeaderWrapper>
            <Text type="h1" size="extraLarge" weight="semiBold">
              Meus pagamentos
            </Text>
            <Button onClick={() => setShowModalAdd(true)}>
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
              handleClickEditButton={handleClickEditButton}
              handleClickDeleteButton={handleClickDeleteButton}
            />
          </s.TableWrapper>
        </Container>
      </s.Wrapper>
    </PaymentsProvider>
  );
}
