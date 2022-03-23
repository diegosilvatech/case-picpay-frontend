import { createContext, useState } from 'react';
import { AxiosResponse } from 'axios';

import { getTasks, createTask } from 'core/services';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type PaymentsProviderValueProps = {
  paymentRecords: PaymentRecordProps[];
  getPayments: () => void;
  addPayment: (payment: PaymentRecordProps) => void;
};

export type PaymentProviderProps = {
  children: React.ReactNode;
};

export const PaymentsContext = createContext<PaymentsProviderValueProps>({
  paymentRecords: [],
  getPayments: () => ({}),
  addPayment: () => ({})
});

export const PaymentsProvider = ({ children }: PaymentProviderProps) => {
  const [paymentRecords, setPayments] = useState<PaymentRecordProps[]>([]);

  const getPayments = async () => {
    const response = await getTasks();
    setPayments(response.data);
  };

  const addPayment = async (payment: PaymentRecordProps) => {
    const response: AxiosResponse<PaymentRecordProps> = await createTask(
      payment
    );
    setPayments([...paymentRecords, response.data]);
  };

  const paymentsProviderValue: PaymentsProviderValueProps = {
    paymentRecords,
    getPayments,
    addPayment
  };

  return (
    <PaymentsContext.Provider value={paymentsProviderValue}>
      {children}
    </PaymentsContext.Provider>
  );
};
