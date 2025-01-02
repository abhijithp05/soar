import React from 'react';
import SearchIcon from 'assets/icons/magnifying-glass.webp';
import NotificationIcon from 'assets/icons/notification.webp';
import SettingIcon from 'assets/icons/setting-nav.webp';
import avatar from 'assets/icons/avatar.webp';
import HamburgerIcon from 'assets/icons/hamburger.webp';
import { Input, Button } from '../ui';
import { TopNavContainer } from '../styles/StyledContainers';
import { useAppContext } from 'context/AppContext';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/ui/Icon';
import useWindowWidth from 'hooks/useWindowWidth';

const TopNav = () => {
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  const {
    appContext: { pageName, isSideBarVisible },
    setApplicationContext,
  } = useAppContext();

  const handleSettingIconClick = () => {
    setApplicationContext({ pageName: 'Setting' });
    navigate('/settings');
  };

  const handleHamburgerIconClick = () => {
    setApplicationContext({ isSideBarVisible: !isSideBarVisible });
  };

  return (
    <TopNavContainer role="banner">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center justify-around w-full lg:w-auto text-black-100 text-3xl font-semibold leading-9 font-inter">
          <div className="flex lg:hidden">
            <Icon
              height="14px"
              width="18px"
              onClick={handleHamburgerIconClick}
              src={HamburgerIcon}
            />
          </div>
          {pageName}
          {windowWidth < 1024 && (
            <Button className="p-2 " aria-label="User Profile">
              <Icon height="45px" width="45px" src={avatar} />
            </Button>
          )}
        </div>
        <div className="flex items-center justify-center space-x-4 w-full lg:w-auto lg:mr-4">
          <div className="flex items-center  border-gray-300 bg-light-gray rounded-full p-2 max-w-xs w-full ">
            <Icon
              height="20px"
              width="20px"
              src={SearchIcon}
              className="mr-2 ml-2 "
            />
            <Input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <Button
            className="p-2 rounded hidden lg:flex"
            aria-label="Settings"
            onClick={handleSettingIconClick}
          >
            <Icon
              src={SettingIcon}
              alt="User Avatar"
              height="56px"
              width="56px"
            />
          </Button>
          <Button
            className="p-2 rounded  hidden lg:flex"
            aria-label="Notifications"
          >
            <Icon
              src={NotificationIcon}
              alt="User Avatar"
              height="56px"
              width="56px"
            />
          </Button>
          {windowWidth >= 1024 && (
            <Button className="p-2 rounded" aria-label="User Profile">
              <Icon src={avatar} alt="User Avatar" height="56px" width="56px" />
            </Button>
          )}
        </div>
      </div>
    </TopNavContainer>
  );
};

export default React.memo(TopNav);
