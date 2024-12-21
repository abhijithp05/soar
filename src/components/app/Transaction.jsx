import { transactionTypes } from 'constants/mockData';
import { formattedDate } from 'utility/dateFormatter';

export const Transaction = ({ transactions = [] }) => {
  if (transactions.length === 0) {
    return null;
  }
  return transactions?.map((transaction) => (
    <div
      key={transaction.id}
      className="flex flex-row justify-between p-3 gap-2"
    >
      {transactionTypes[transaction.type].icon}
      <div className="flex flex-col text-left items-start justify-start">
        <p className="font-inter text-base font-medium leading-5">
          {transaction.description}
        </p>
        <p className="font-inter text-sm font-normal leading-4 text-light-gray-100">
          {formattedDate(transaction.date)}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">{transaction.amount}</p>
      </div>
    </div>
  ));
};
