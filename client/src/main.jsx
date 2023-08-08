import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import App from './App.jsx';
import reducers from './reducers/Index';
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
);
