import React from 'react';
import ReactDOM from 'react-dom/client';
import { BoardProvider } from './components/StoreProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BoardProvider>
      <App />
    </BoardProvider>
  </React.StrictMode>
);