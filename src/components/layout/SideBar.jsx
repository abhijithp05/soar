import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SoarIcon } from 'assets/icons/soar.svg';
import Icon from '../ui/Icon';
import { useAppContext } from 'context/AppContext';
import { sideBarConstants } from 'constants/appConstants';
import { SideNavContainer } from '../styles/StyledContainers';
import { StyledLink } from '../styles/StyledLink';
import useWindowWidth from 'hooks/useWindowWidth';

const SideBar = () => {
  const {
    appContext: { isSideBarVisible },
    setApplicationContext,
  } = useAppContext();
  const windowWidth = useWindowWidth();
  const [selected, setSelected] = useState('Dashboard');

  const handleLinkClick = useCallback(
    (value) => {
      setApplicationContext({ pageName: value.title });
      setSelected(value.label);
      console.log('windowWidth', windowWidth);
      if (windowWidth < 1024)
        setApplicationContext({ isSideBarVisible: false });
    },
    [setApplicationContext]
  );

  return isSideBarVisible ? (
    <SideNavContainer role="navigation" aria-label="Main Navigation">
      <nav>
        <div className="flex flex-row items-center mb-10">
          <Icon icon={SoarIcon} className="w-9 h-9" alt="Soar Task Logo" />
          <StyledLink className="font-inter font-extrabold text-2xl leading-8 text-black-100">
            Soar Task
          </StyledLink>
        </div>
        <ul className="space-y-4">
          {Object.entries(sideBarConstants).map(([key, value]) => (
            <li key={key} className="flex flex-row items-center ml-2">
              <Icon
                icon={value.icon}
                className="w-6 h-6"
                color={selected === value.label ? '#000' : '#B1B1B1'}
                alt={`${value.label} Icon`}
              />
              <Link
                className={`font-medium leading-5 text-lg block px-4 py-2 ${value.disabled ? 'pointer-events-none' : ''} ${selected === value.label ? 'text-black' : 'text-gray-400'} hover:text-gray-700 rounded`}
                onClick={() => handleLinkClick(value)}
                to={value.path}
                aria-current={selected === value.label ? 'page' : undefined}
              >
                {value.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SideNavContainer>
  ) : null;
};

export default React.memo(SideBar);
