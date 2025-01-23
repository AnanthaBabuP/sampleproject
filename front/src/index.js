import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct API
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App';
import './App.css';


// Create root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);
