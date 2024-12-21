import React from 'react';
import { SideBar, TopNav } from '../components/layout';
import {
  MainContainer,
  MainContentContainer,
} from '../components/styles/StyledContainers';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <MainContainer>
      {/* Side Navigation */}
      <SideBar />

      {/* Main Content */}
      <MainContentContainer>
        <TopNav />
        <Outlet />
      </MainContentContainer>
    </MainContainer>
  );
};
