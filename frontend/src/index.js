import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from './Redux/Store';
import {Toaster} from 'sonner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Toaster className="z-50" position="bottom-center"/>
      <App/>
    </Provider>
  </BrowserRouter>
);
