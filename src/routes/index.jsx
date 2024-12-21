import { Route, Routes } from 'react-router-dom';
import { Layout } from 'screen';
import { Dashboard } from 'screen/Dashboard';
import { Settings } from 'screen/Settings';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
);
