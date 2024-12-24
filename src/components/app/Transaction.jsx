import { transactionTypes } from 'constants/mockData';
import { formattedDate } from 'utility/formatter/formatDate';

export const Transaction = ({ transaction }) => (
  <div
    key={transaction?.id}
    className="flex flex-row justify-between items-center p-3 gap-2"
  >
    <div className="flex flex-row gap-2">
      {transactionTypes[transaction?.type]?.icon}
      <div className="flex flex-col text-left items-start justify-center">
        <p className="font-inter text-base font-medium leading-5">
          {transaction?.description || 'N/A'}
        </p>
        <p className="font-inter text-sm font-normal leading-4 text-light-gray-100">
          {formattedDate(transaction?.date)}
        </p>
      </div>
    </div>
    <div className="flex flex-col">
      <p
        className={`text-sm font-semibold ${transaction?.amount > 0 ? 'text-success' : 'text-red-500'}`}
      >
        {transaction?.amount || 'N/A'}
      </p>
    </div>
  </div>
);
