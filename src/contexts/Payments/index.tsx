import { createContext, useState } from 'react';
import { AxiosResponse } from 'axios';

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
    const response = await getTasks();
    if (response) {
      setPayments(response.data);
    }
  };

  const addPayment = async (payment: PaymentRecordProps) => {
    const response: AxiosResponse<PaymentRecordProps> | null = await createTask(
      payment
    );
    if (response) {
      setPayments([...paymentRecords, response.data]);
    }
  };

  const editPayment = async (
    paymentId: number,
    payment: PaymentRecordProps
  ) => {
    const response: AxiosResponse<PaymentRecordProps> | null = await editTask(
      paymentId,
      payment
    );
    if (response) {
      const newPaymentList = paymentRecords.filter(
        (paymentRecord) => paymentRecord.id !== paymentId
      );
      setPayments([...newPaymentList, response.data]);
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
