import React from 'react';
import { SideBar } from '../components/SideBar';
import { TopNav } from '../components/TopNav';
import { MainContent } from '../components/MainContent';
import {
  MainContainer,
  MainContentContainer,
} from '../styles/StyledContainers';

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
