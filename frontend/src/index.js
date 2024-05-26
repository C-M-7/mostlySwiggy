import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Help from './Components/helpPage/Help';
import Cart from './Components/cartPage/Cart';
import Search from './Components/searchPage/Search';
import FoodItem from './Components/fooditemPage/FoodItem';
import Restaurant from './Components/restaurantPage/Restaurant';
import {Provider} from 'react-redux';
import { store } from './Redux/Store';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {Toaster} from 'sonner';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:'/help',
    element: <Help/>
  },
  {
    path:'/cart',
    element: <Cart/>
  },
  {
    path:'/search',
    element: <Search/>
  },
  {
    path:'/fooditem/:cuisineName',
    element: <FoodItem/>
  },
  {
    path:'/restaurant/:id',
    element:<Restaurant/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
          <Toaster className="z-50" position="bottom-center"/>
    <RouterProvider router={router} />
  </Provider>
);
