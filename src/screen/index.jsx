import React from 'react';
import { SideBar, TopNav, MainContent } from '../components/layout';
import {
  MainContainer,
  MainContentContainer,
} from '../components/styles/StyledContainers';

export const Layout = () => {
  return (
    <MainContainer>
      {/* Side Navigation */}
      <SideBar />

      {/* Main Content */}
      <MainContentContainer>
        <TopNav />
        <MainContent />
      </MainContentContainer>
    </MainContainer>
  );
};
