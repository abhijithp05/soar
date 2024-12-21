import React from 'react';
import { quickTransferUsers, transactions } from 'constants/mockData';
import { CreditCard } from '../components/app/CreditCard';
import { Transaction } from '../components/app/Transaction';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import LineGraph from '../components/charts/LineGraph';
import { Card } from '../components/styles/StyledCard';
import { QuickTransfer } from 'components/app/QuickTransfer';

export const Dashboard = () => {
  return (
    <main className="flex-1 p-8 mt-16 bg-light-gray h-full lg:ml-64 overflow-y-auto">
      {/* Added mt-16 to avoid content hiding under the top nav */}
      <div className="flex flex-row w-full p-3 gap-3">
        <div className="flex flex-col w-2/3 gap-5">
          <p className="text-left text-xl font-semibold text-black">My Cards</p>
          <div className="flex flex-row gap-3 justify-between">
            <CreditCard />
            <CreditCard />
          </div>
        </div>

        <div className="flex flex-col w-1/3 gap-5 h-60">
          <p className="text-left text-xl font-semibold text-black">
            Recent Transaction
          </p>
          <div className="flex flex-row gap-3 justify-between h-full">
            <Card>
              <Transaction transactions={transactions} />
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full p-3 gap-3">
        <div className="flex flex-col w-2/3 gap-5">
          <p className="text-left text-xl font-semibold text-black">
            Weekly Activity
          </p>
          <div className=" bg-white rounded-3xl">
            <BarChart />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/3">
          <p className="text-left text-xl font-semibold text-black">
            Expenses Statitics
          </p>
          <div className=" bg-white rounded-3xl">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full p-3 gap-3">
        <div className="flex flex-col w-1/3 gap-5">
          <p className="text-left text-xl font-semibold text-black">
            Quick Transfer
          </p>
          <div className=" bg-white rounded-3xl">
            <QuickTransfer userDetails={quickTransferUsers} />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-2/3">
          <p className="text-left text-xl font-semibold text-black">
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
