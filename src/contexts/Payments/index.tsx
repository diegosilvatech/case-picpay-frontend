import { createContext, useState } from 'react';
import { AxiosResponse } from 'axios';

import { getTasks, createTask } from 'core/services';

import {
  PaymentRecordProps,
  AddPaymentProps
} from 'core/types/payments/globals';

export type PaymentsProviderValueProps = {
  paymentRecords: PaymentRecordProps[];
  getPayments: () => void;
  addPayment: (payment: AddPaymentProps) => void;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [paymentRecords, setPayments] = useState<any>([]);

  const getPayments = async () => {
    const response = await getTasks();
    setPayments(response.data);
  };

  const addPayment = async (payment: AddPaymentProps) => {
    const response: AxiosResponse<AddPaymentProps> = await createTask(payment);
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
