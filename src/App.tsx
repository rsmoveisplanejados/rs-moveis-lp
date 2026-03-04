import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { CRMProvider } from './context/CRMContext';

export default function App() {
  return (
    <CRMProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </CRMProvider>
  );
}
