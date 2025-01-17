import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import router components
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Define a route with a dynamic 'id' */}
        <Route path="/:id" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
