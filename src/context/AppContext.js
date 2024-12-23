import {
  cardDetails,
  quickTransferUsers,
  transactions,
} from 'constants/mockData';
import React, { createContext, useState, useContext } from 'react';

// Step 1: Create the Context
const AppContext = createContext();

// Step 2: Create the Provider Component
export const AppContextProvider = ({ children }) => {
  const [appContext, setAppContext] = useState({
    pageName: 'Overview',
    cardDetails,
    transactions,
    quickTransferUsers,
  });

  const setApplicationContext = (newContext) => {
    console.log('newContext', newContext);
    setAppContext((prev) => ({ ...prev, ...newContext }));
    console.log('appContext', appContext);
  };

  return (
    <AppContext.Provider value={{ appContext, setApplicationContext }}>
      {children}
    </AppContext.Provider>
  );
};

// Step 3: Create a custom hook to access context
export const useAppContext = () => {
  return useContext(AppContext);
};
