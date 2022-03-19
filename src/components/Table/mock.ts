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
    name: 'Diego Silva',
    username: 'diegosilvatech',
    title: 'Frontend Developer | PicPay',
    value: 99.0,
    date: '2022-03-19T21:50:20Z',
    image: 'https://avatars.githubusercontent.com/u/38539443?v=4',
    isPayed: true
  }
];
