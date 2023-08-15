import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotesContextProvider from './context/NotesContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NotesContextProvider>

    <App />
  </NotesContextProvider>

);

