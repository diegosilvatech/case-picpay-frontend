import { createContext, useState } from 'react';

import { getTasks, createTask, editTask, deleteTask } from 'core/services';
import { PaymentRecordProps } from 'core/types/payments/globals';

export type PaymentsProviderValueProps = {
  paymentRecords: PaymentRecordProps[];
  getPayments: () => void;
  addPayment: (payment: PaymentRecordProps) => void;
  editPayment: (paymentId: number, payment: PaymentRecordProps) => void;
  deletePayment: (paymendId: number) => void;
};

export type PaymentProviderProps = {
  children: React.ReactNode;
};

export const PaymentsContext = createContext<PaymentsProviderValueProps>({
  paymentRecords: [],
  getPayments: () => ({}),
  addPayment: () => ({}),
  editPayment: () => ({}),
  deletePayment: () => ({})
});

export const PaymentsProvider = ({ children }: PaymentProviderProps) => {
  const [paymentRecords, setPayments] = useState<PaymentRecordProps[]>([]);

  const getPayments = async () => {
    const data = await getTasks();
    if (data) {
      setPayments(data);
    }
  };

  const addPayment = async (payment: PaymentRecordProps) => {
    const data = await createTask(payment);
    if (data) {
      setPayments([...paymentRecords, data]);
    }
  };

  const editPayment = async (
    paymentId: number,
    payment: PaymentRecordProps
  ) => {
    const data = await editTask(paymentId, payment);
    if (data) {
      const newPaymentList = paymentRecords.filter(
        (paymentRecord) => paymentRecord.id !== paymentId
      );
      setPayments([...newPaymentList, data]);
    }
  };

  const deletePayment = async (paymentId: number) => {
    if (await deleteTask(paymentId)) {
      const newPaymentList = paymentRecords.filter(
        (paymentRecord) => paymentRecord.id !== paymentId
      );
      setPayments(newPaymentList);
    }
  };

  const paymentsProviderValue: PaymentsProviderValueProps = {
    paymentRecords,
    getPayments,
    addPayment,
    editPayment,
    deletePayment
  };

  return (
    <PaymentsContext.Provider value={paymentsProviderValue}>
      {children}
    </PaymentsContext.Provider>
  );
};
