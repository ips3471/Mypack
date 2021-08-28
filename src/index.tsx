import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth_service';
import ItemRepository from './service/item-repository';

const authService = new AuthService();
export const AuthContext = createContext<any | null>(null);
const itemRepository = new ItemRepository();

ReactDOM.render(
<React.StrictMode>
    <AuthContext.Provider value={authService}>
      <App itemRepository={itemRepository}  />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();