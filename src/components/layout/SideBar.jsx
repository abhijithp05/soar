import React from 'react';
import { ReactComponent as SoarIcon } from 'assets/icons/soar.svg';
import { sideBarConstants } from 'constants/sideBar';
import { SideNavContainer } from '../styles/StyledContainers';
import { StyledLink } from '../styles/StyledLink';
import Icon from '../ui/Icon';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <SideNavContainer>
      <nav>
        <div className="flex flex-row items-center mb-10">
          <Icon icon={SoarIcon} className="w-9 h-9" />
          <StyledLink className="font-extrabold text-2xl leading-8">
            Soar Task
          </StyledLink>
        </div>
        <ul className="space-y-4">
          {Object.entries(sideBarConstants)?.map(([key, value]) => (
            <li key={key} className="flex flex-row items-center ml-2">
              {value.icon}
              <Link to={value.path}>
                <StyledLink className="font-medium leading-5 text-lg">
                  {value.label}
                </StyledLink>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SideNavContainer>
  );
};
