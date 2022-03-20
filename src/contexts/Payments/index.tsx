import { createContext, useState } from 'react';

import { getPaymentList } from 'core/services';

import { PaymentRecordProps } from 'core/types/payments/globals';

export type PaymentsProviderValueProps = {
  paymentRecords: PaymentRecordProps[];
  getPayments: () => void;
};

export type PaymentProviderProps = {
  children: React.ReactNode;
};

export const PaymentsContext = createContext<PaymentsProviderValueProps>({
  paymentRecords: [],
  getPayments: () => ({})
});

export const PaymentsProvider = ({ children }: PaymentProviderProps) => {
  const [paymentRecords, setPayments] = useState([]);

  const getPayments = async () => {
    const response = await getPaymentList();
    setPayments(response.data);
  };

  const paymentsProviderValue: PaymentsProviderValueProps = {
    paymentRecords,
    getPayments
  };

  return (
    <PaymentsContext.Provider value={paymentsProviderValue}>
      {children}
    </PaymentsContext.Provider>
  );
};
