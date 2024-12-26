import React from 'react';
import { Transaction } from 'components/app';

const Transactions = ({ transactions = [] }) => {
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

export default React.memo(Transactions);
