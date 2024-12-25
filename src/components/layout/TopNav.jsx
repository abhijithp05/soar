import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/magnifying-glass.svg';
import { ReactComponent as NotificationIcon } from 'assets/icons/notification.svg';
import { ReactComponent as SettingIcon } from 'assets/icons/setting-nav.svg';
import { ReactComponent as AvatarIcon } from 'assets/icons/avatar.svg';
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg';
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
              icon={HamburgerIcon}
            />
          </div>
          {pageName}
          {windowWidth < 1024 && (
            <Button className="p-2 " aria-label="User Profile">
              <AvatarIcon alt="User Avatar" />
            </Button>
          )}
        </div>
        <div className="flex items-center space-x-4 lg:mr-20">
          <div className="flex items-center  border-gray-300 bg-light-gray rounded-full p-2 max-w-xs w-full ">
            <SearchIcon className="mr-2 ml-2 " />
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
            <SettingIcon alt="Setting Icon" />
          </Button>
          <Button
            className="p-2 rounded  hidden lg:flex"
            aria-label="Notifications"
          >
            <NotificationIcon alt="Notification Icon" />
          </Button>
          {windowWidth >= 1024 && (
            <Button className="p-2 rounded" aria-label="User Profile">
              <AvatarIcon alt="User Avatar" />
            </Button>
          )}
        </div>
      </div>
    </TopNavContainer>
  );
};

export default React.memo(TopNav);
