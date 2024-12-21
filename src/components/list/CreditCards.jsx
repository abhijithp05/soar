import { CreditCard } from 'components/app/CreditCard';

export const CreditCards = ({ cardDetails }) =>
  cardDetails?.map((cardDetail, index) => (
    <CreditCard
      key={`${cardDetails.cardHolderName}-${index}`}
      cardDetails={cardDetail}
      isDarkMode={index % 2 === 0}
    />
  ));
