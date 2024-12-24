import React from 'react';
import { Card } from './Card';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineGraph from './LineGraph';

export const MainContent = () => {
  return (
    <main className="flex-1 p-8 mt-16 bg-light-gray h-full lg:ml-64">
      {/* Added mt-16 to avoid content hiding under the top nav */}
      <div className="flex flex-row w-full p-3 gap-3">
        <div className="flex flex-col w-3/4 gap-5">
          <p className="text-left text-xl font-semibold text-black">My Cards</p>
          <div className="flex flex-row gap-3 justify-between">
            <Card />
            <Card />
          </div>
        </div>

        <div className="bg-white p-6 w-1/4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Card 3</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
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
