import { createContext, useState } from 'react';

import { getPaymentList } from 'core/services';

export type PaymentProps = {
  id: number;
  name: string;
  username: string;
  title: string;
  value: number;
  date: string;
  image: string;
  isPayed: boolean;
};

export type PaymentsProviderValueProps = {
  payments: PaymentProps[];
  getPayments: () => void;
};

export type PaymentProviderProps = {
  children: React.ReactNode;
};

export const PaymentsContext = createContext<PaymentsProviderValueProps>({
  payments: [],
  getPayments: () => ({})
});

export const PaymentsProvider = ({ children }: PaymentProviderProps) => {
  const [payments, setPayments] = useState([]);

  const getPayments = async () => {
    const response = await getPaymentList();
    setPayments(response.data);
  };

  const paymentsProviderValue: PaymentsProviderValueProps = {
    payments,
    getPayments
  };

  return (
    <PaymentsContext.Provider value={paymentsProviderValue}>
      {children}
    </PaymentsContext.Provider>
  );
};
