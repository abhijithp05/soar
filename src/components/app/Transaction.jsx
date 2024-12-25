import PropTypes from 'prop-types';
import { transactionTypes } from 'constants/mockData';
import { formattedDate } from 'utility/formatter/formatDate';
import React from 'react';

const Transaction = ({ transaction }) => (
  <div
    key={transaction?.id}
    className="flex flex-row justify-between items-center p-3 gap-2"
    role="option"
    aria-label={`Transaction ${transaction?.description || 'N/A'} on ${formattedDate(transaction?.date)}`}
  >
    <div className="flex flex-row gap-2">
      <span role="img" aria-label={transactionTypes[transaction?.type]?.label}>
        {transactionTypes[transaction?.type]?.icon}
      </span>
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
        aria-label={`Amount: ${transaction?.amount || 'N/A'}`}
      >
        {transaction?.amount || 'N/A'}
      </p>
    </div>
  </div>
);

export default React.memo(Transaction);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
