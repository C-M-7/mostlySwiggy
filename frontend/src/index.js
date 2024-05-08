import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Help from './Components/helpPage/Help';
import Cart from './Components/cartPage/Cart';
import Search from './Components/searchPage/Search';
import FoodItem from './Components/fooditemPage/FoodItem';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Restaurant from './Components/restaurantPage/Restaurant';
import SwiggyCorp from './Components/swiggyCorp/SwiggyCorp';
import Offers from './Components/offersPage/Offers';

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
    path:'/fooditem',
    element: <FoodItem/>
  },
  {
    path:'/restaurant',
    element:<Restaurant/>
  },
  {
    path:'/swiggycorporate',
    element: <SwiggyCorp/>
  },
  {
    path : '/offers',
    element: <Offers/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
