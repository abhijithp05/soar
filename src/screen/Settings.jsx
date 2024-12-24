import React from 'react';
// import { Input, Button } from 'components/ui';
// import Icon from 'components/ui/Icon';
import { Card } from 'components/styles/StyledCard';
import Tabs from 'components/app/Tab';

export const Settings = () => {
  return (
    <main className="flex-1 p-8 mt-16 bg-light-gray h-full lg:ml-64">
      <Card>
        <Tabs />
      </Card>
    </main>
  );
};
