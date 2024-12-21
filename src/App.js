import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppContextProvider } from 'context/AppContext';

function App() {
  return (
    <Router>
      <div className="App">
        <AppContextProvider>
          <AppRoutes />
        </AppContextProvider>
      </div>
    </Router>
  );
}

export default App;
