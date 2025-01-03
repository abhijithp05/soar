import React from 'react';
import PropTypes from 'prop-types';
import CardChipIcon from 'assets/icons/card-chip.webp';
import CardChipBlackIcon from 'assets/icons/card-chip-black.webp';
import CardSymbolIcon from 'assets/icons/card-symbol.webp';
import Icon from 'components/ui/Icon';
import { formatCardNumber } from 'utility/formatter/formatCardNumber';

const CreditCard = ({ cardDetails, isDarkMode }) => {
  return (
    <div
      role="region"
      aria-label={`Credit Card ending in ${cardDetails.cardNumber.toString().slice(-4)}`}
      className={`flex flex-col justify-between w-[350px] min-w-[350px] h-60 ${isDarkMode ? 'bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)]' : 'bg-white'} rounded-lg shadow-md`}
    >
      <div className="flex flex-row justify-between p-7">
        <div className="flex flex-col text-left">
          <h5
            className={`${isDarkMode ? 'text-white' : 'text-black-100'} text-xs font-normal leading-3 opacity-80`}
          >
            Balance
          </h5>
          <p
            className={`${isDarkMode ? 'text-white' : 'text-black-100'} text-base font-semibold leading-6`}
          >
            {`$ ${cardDetails.balance}`}
          </p>
        </div>
        <Icon
          src={isDarkMode ? CardChipIcon : CardChipBlackIcon}
          width="34px"
          height="34px"
        />
      </div>
      <div className="flex flex-row w-4/5 justify-between p-7 text-left">
        <div className="flex flex-col gap-1">
          <h5
            className={`${isDarkMode ? 'text-white' : 'text-black-100'} text-xs font-normal leading-3 font-lato opacity-80`}
          >
            CARD HOLDER
          </h5>
          <p
            className={`${isDarkMode ? 'text-white' : 'text-black-100'} text-base font-semibold leading-5 font-lato`}
          >
            {cardDetails.cardHolderName}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h5
            className={`${isDarkMode ? 'text-white' : 'text-black-100'} text-xs font-normal leading-3 font-lato opacity-80`}
          >
            VALID THRU
          </h5>
          <p
            className={`${isDarkMode ? 'text-white' : 'text-black-100'} text-base font-semibold leading-5 font-lato`}
          >
            {cardDetails.validTill}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-row justify-between items-center p-3 pl-7 h-16 ${isDarkMode ? '' : 'border-t border-t-bg-blue-100'} bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.15)_0%,_rgba(255,_255,_255,_0)_100%)]`}
      >
        <div
          className={`${isDarkMode ? 'text-white' : 'text-black-100'} font-semibold text-xl leading-6`}
        >
          {formatCardNumber(cardDetails.cardNumber)}
        </div>
        <Icon src={CardSymbolIcon} width="44px" height="30px" />
      </div>
    </div>
  );
};

CreditCard.propTypes = {
  cardDetails: PropTypes.shape({
    cardHolderName: PropTypes.string.isRequired,
    validTill: PropTypes.string.isRequired,
    cardNumber: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default React.memo(CreditCard);
