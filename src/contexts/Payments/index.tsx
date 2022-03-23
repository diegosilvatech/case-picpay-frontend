import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [paymentRecords, setPayments] = useState([]);

  const navigate = useNavigate();

  const getPayments = async () => {
    const response = await getTasks();
    setPayments(response.data);
  };

  const addPayment = async (payment: AddPaymentProps) => {
    return await createTask(payment).then(() => navigate('/'));
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
