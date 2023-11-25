// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main SCSS file for styles
import './scss/main.scss';

// Import custom font files
import './assets/fonts/AirbnbCereal_W_Bold.otf';
import './assets/fonts/AirbnbCereal_W_Bold.otf';
import './assets/fonts/AirbnbCereal_W_Bold.otf';

// Import components
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
