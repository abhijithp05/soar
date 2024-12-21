import { Dashboard } from 'screen/Dashboard';
import './App.css';
import { Layout } from './screen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Settings } from 'screen/Settings';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
