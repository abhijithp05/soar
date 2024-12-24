import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
`;

export const SideNavContainer = styled.div`
  background-color: white;
  width: 16rem;
  padding: 1.25rem 2.5rem 2.5rem 2.25rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right-width: thin;
  @media (min-width: 1024px) {
    display: block;
  }
  @media (max-width: 1024px) {
    margin-top: 110px;
    width: 100%;
  }
`;

export const TopNavContainer = styled.header`
  background-color: white;
  color: white;
  width: 83%;
  padding: 0.25rem;
  padding-left: 1rem;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 16rem;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;
