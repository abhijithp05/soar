import React from 'react';
import { Card } from 'components/styles/StyledCard';
const Tab = React.lazy(() => import('components/app/Tab'));

const Settings = () => {
  return (
    <main className="flex-1 p-8 mt-24 lg:mt-16 bg-light-gray h-full lg:ml-64 overflow-y-hidden">
      <Card className="overflow-y-auto">
        <Tab />
      </Card>
    </main>
  );
};

export default React.memo(Settings);
