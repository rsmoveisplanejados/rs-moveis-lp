import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import { CRMProvider } from './context/CRMContext';

export default function App() {
  return (
    <CRMProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lp" element={<LandingPage />} />
        </Routes>
      </Router>
    </CRMProvider>
  );
}
