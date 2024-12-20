import React from 'react';
import { transactions } from 'constants/mockData';
import { CreditCard } from '../app/CreditCard';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import LineGraph from '../charts/LineGraph';
import { Card } from '../styles/StyledCard';

export const MainContent = () => {
  return (
    <main className="flex-1 p-8 mt-16 bg-light-gray h-full lg:ml-64">
      {/* Added mt-16 to avoid content hiding under the top nav */}
      <div className="flex flex-row w-full p-3 gap-3">
        <div className="flex flex-col w-3/4 gap-5">
          <p className="text-left text-xl font-semibold text-black">My Cards</p>
          <div className="flex flex-row gap-3 justify-between">
            <CreditCard />
            <CreditCard />
          </div>
        </div>

        <div className="flex flex-col w-1/4 gap-5">
          <p className="text-left text-xl font-semibold text-black">
            Recent Transaction
          </p>
          <div className="flex flex-row gap-3 justify-between h-full">
            <Card>
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-row justify-between p-3"
                >
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">
                      {transaction.description}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">
                      {transaction.amount}
                    </p>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full p-3 gap-3">
        <div className="flex flex-col w-3/4 gap-5">
          <p className="text-left text-xl font-semibold text-black">
            Weekly Activity
          </p>
          <div className=" bg-white rounded-3xl">
            <BarChart />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/4">
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
            <BarChart />
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
