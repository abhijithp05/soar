import { ReactComponent as CardChipIcon } from 'assets/icons/card-chip.svg';
import { ReactComponent as CardSymbolIcon } from 'assets/icons/card-symbol.svg';
import Icon from 'components/ui/Icon';

export const CreditCard = () => {
  return (
    <div className="flex flex-col justify-between bg-white w-[350px] h-60 bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)] rounded-lg shadow-md">
      <div className="flex flex-row justify-between p-7">
        <div className="flex flex-col text-left">
          <h5 className="text-white text-xs font-normal leading-3 opacity-70">
            Balance
          </h5>
          <p className="text-white text-base font-semibold leading-6">
            $ 34324
          </p>
        </div>
        <Icon icon={CardChipIcon} />
      </div>
      <div className="flex flex-row w-4/5 justify-between p-7 text-left">
        <div className="flex flex-col gap-1">
          <h5 className="text-white text-xs font-normal leading-3 font-lato opacity-70">
            CARD HOLDER
          </h5>
          <p className="text-white text-base font-semibold leading-5 font-lato">
            Eddy Cusuma
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-white text-xs font-normal leading-3 font-lato opacity-70">
            VALID THRU
          </h5>
          <p className="text-white text-base font-semibold leading-5 font-lato">
            12/22
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-3 pl-7 h-16 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.15)_0%,_rgba(255,_255,_255,_0)_100%)]">
        <div className="text-white font-semibold text-xl leading-6">
          3778 **** **** 1234
        </div>
        <Icon icon={CardSymbolIcon} />
      </div>
    </div>
  );
};
