import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/magnifying-glass.svg';
import { ReactComponent as NotificationIcon } from 'assets/icons/notification.svg';
import { ReactComponent as SettingIcon } from 'assets/icons/setting-nav.svg';
import { ReactComponent as AvatarIcon } from 'assets/icons/avatar.svg';
import { Input, Button } from '../ui';
import { TopNavContainer } from '../styles/StyledContainers';

export const TopNav = () => {
  return (
    <TopNavContainer>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-black">Dashboard</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center  border-gray-300 bg-light-gray rounded-full p-2 max-w-xs w-full">
            <SearchIcon className="mr-2 ml-2" />
            <Input
              placeholder="Search for something"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <Button className="p-2 rounded">
            <SettingIcon />
          </Button>
          <Button className="p-2 rounded">
            <NotificationIcon />
          </Button>
          <Button className="p-2 rounded">
            <AvatarIcon />
          </Button>
        </div>
      </div>
    </TopNavContainer>
  );
};
