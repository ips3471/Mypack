import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth_service';

const authService = new AuthService();
export const AuthContext = createContext<any | null>(null);

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider value={authService}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();