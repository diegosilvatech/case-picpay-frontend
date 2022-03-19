export type PaymentDataProps = {
  id: number;
  name: string;
  username: string;
  title: string;
  value: number;
  date: string;
  image: string;
  isPayed: boolean;
};

export type PaymentListDataProps = PaymentDataProps[];

export const mockedPaymentListData: PaymentListDataProps = [
  {
    id: 1,
    name: 'Pennie Dumphries',
    username: 'pdumphries0',
    title: 'Dental Hygienist',
    value: 19.96,
    date: '2020-07-21T05:53:20Z',
    image:
      'https://robohash.org/asperioresprovidentconsequuntur.png?size=150x150&set=set1',
    isPayed: true
  }
];
