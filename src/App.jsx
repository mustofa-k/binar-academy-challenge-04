import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:movieId" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App
