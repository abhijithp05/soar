import React, { lazy } from 'react';
import Transactions from '../components/list/Transactions';
import { Card } from '../components/styles/StyledCard';
import { QuickTransfer } from 'components/app';
import { useAppContext } from 'context/AppContext';
import { StyledHiddenScrollContainer } from 'components/styles/StyledHiddenScrollContainer';

const BarChart = lazy(() => import('../components/charts/BarChart'));
const PieChart = lazy(() => import('../components/charts/PieChart'));
const LineGraph = lazy(() => import('../components/charts/LineGraph'));
const CreditCards = lazy(() => import('../components/list/CreditCards'));

const Dashboard = () => {
  const {
    appContext: { cardDetails, quickTransferUsers, transactions },
  } = useAppContext();
  return (
    <main className="flex-1 p-2 sm:gap-6 lg:p-8 mt-16 bg-light-gray h-full sm:flex-col lg:ml-64 overflow-y-auto">
      {/* Added mt-16 to avoid content hiding under the top nav */}
      <div className="flex lg:flex-row flex-col w-full p-3 gap-3">
        <div className="flex flex-col w-full lg:w-2/3 gap-4">
          <div className="flex flex-row justify-between">
            <p className="font-inter text-left text-xl font-semibold text-black">
              My Cards
            </p>
            <p
              role="button"
              className="p-2 text-base font-semibold leading-5 text-black hover:text-gray-700 pointer-events-auto font-inter"
            >
              See All
            </p>
          </div>

          <StyledHiddenScrollContainer className="flex flex-row gap-4 justify-between">
            <CreditCards cardDetails={cardDetails} />
          </StyledHiddenScrollContainer>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 gap-5 h-60">
          <p className="font-inter text-left text-xl font-semibold text-black">
            Recent Transaction
          </p>
          <div className="flex flex-row gap-3 justify-between h-full">
            <Card role="listbox" aria-label="transaction-list">
              <Transactions transactions={transactions} />
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full p-3 gap-3">
        <div className="flex flex-col mt-14 lg:mt-0 w-full lg:w-2/3 gap-5">
          <p className="font-inter text-left text-xl font-semibold text-black">
            Weekly Activity
          </p>
          <div className="flex bg-white rounded-3xl items-center justify-center">
            <BarChart />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-1/3">
          <p className="font-inter text-left text-xl font-semibold text-black">
            Expenses Statitics
          </p>
          <div className=" bg-white rounded-3xl">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full p-3 gap-3">
        <div className="flex flex-col w-full lg:w-1/3 gap-5">
          <p className="font-inter text-left text-xl font-semibold text-black">
            Quick Transfer
          </p>
          <div className="h-full px-2 py-2 bg-white rounded-3xl">
            <QuickTransfer userDetails={quickTransferUsers} />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-2/3">
          <p className="font-inter text-left text-xl font-semibold text-black">
            Balance History
          </p>
          <div className=" bg-white rounded-3xl">
            <LineGraph />
          </div>
        </div>
      </div>
    </main>
  );
};

export default React.memo(Dashboard);
