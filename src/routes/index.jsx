import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('screen'));
const Dashboard = lazy(() => import('screen/Dashboard'));
const Settings = lazy(() => import('screen/Settings'));

export const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </Suspense>
);
