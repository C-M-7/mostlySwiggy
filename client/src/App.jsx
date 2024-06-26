import "./App.css";
import { useSelector } from 'react-redux';
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from "./Components/mainPage/Home";
import Help from './Components/helpPage/Help';
import Cart from './Components/cartPage/Cart';
import Search from './Components/searchPage/Search';
import FoodItem from './Components/fooditemPage/FoodItem';
import Restaurant from './Components/restaurantPage/Restaurant';
import LSidebar from "./Components/mainPage/LSidebar";

function App() {
  const resData = useSelector((state) => state.RestaurantsData);

  return (
      <Routes>
        <Route path="/location" element={<LSidebar/>}/>
        <Route path='/home' element={resData ? <Home/> : <Navigate to='/'/>} />
        <Route path='/' element={resData ? <Navigate to='/home'/> : <Navigate to='/location'/>}/>
        <Route path='/help' element={resData ? <Help/> : <Navigate to='/'/>}/>
        <Route path='/cart' element={resData ? <Cart/> : <Navigate to='/'/>}/>
        <Route path='/search' element={resData ? <Search/> : <Navigate to='/'/>}/>
        <Route path='/fooditem/:cuisineName' element={resData ? <FoodItem/> : <Navigate to='/'/>}/>
        <Route path='/restaurant/:id' element={resData ? <Restaurant/> : <Navigate to='/'/>}/>
      </Routes>
  );
}

export default App;
