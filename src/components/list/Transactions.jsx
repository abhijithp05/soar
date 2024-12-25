import { Transaction } from 'components/app';

export const Transactions = ({ transactions = [] }) => {
  if (transactions.length === 0) {
    return null;
  }
  return transactions?.map((transaction) => (
    <Transaction
      aria-label="transaction"
      key={transaction.id}
      transaction={transaction}
    />
  ));
};
