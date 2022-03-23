export type PaymentRecordProps = {
  id: number;
  name: string;
  username: string;
  title: string;
  value: number;
  date: string;
  image: string;
  isPayed: boolean;
};

export type AddPaymentProps = Pick<
  PaymentRecordProps,
  'name' | 'value' | 'date' | 'isPayed' | 'title'
>;
