import React from 'react';
import { CreditCard } from 'components/app';

const CreditCards = ({ cardDetails }) =>
  cardDetails?.map((cardDetail, index) => (
    <CreditCard
      role="card-info"
      aria-label="Credit Cards"
      key={`${cardDetails.cardHolderName}-${index}`}
      cardDetails={cardDetail}
      isDarkMode={index % 2 === 0}
    />
  ));

export default React.memo(CreditCards);
