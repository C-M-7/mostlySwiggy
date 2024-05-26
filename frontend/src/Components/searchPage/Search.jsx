import React, { useState } from 'react'
import Navbar from '../mainPage/Navbar'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Search() {
  const [routes, setRoutes] = useState('res');
  const [searchTerm , setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const resData = useSelector((state) => state.RestaurantsData);
  const cusData = useSelector((state) => state.RestaurantsCuisines);

  const cusRoutes = () => setRoutes('cus');
  const resRoutes = () => setRoutes('res');
  
  const handleChange = (event) =>{
    const term = event.target.value;
    setSearchTerm(term);
    if(term.trim() === '') setSearchResults([]);
    else{
      setTimeout(()=>{
        const res = resData.filter((r)=>r.name.toLowerCase().startsWith(term.toLowerCase())).map(r => [r.name, r.id]);
        const cui = cusData.filter((c)=> c.toLowerCase().startsWith(term.toLowerCase()));
        let result;
        if(routes === 'res') result = res;
        else result = cui;
        console.log(result);
        setSearchResults(result);
      }, 1000);
    }
  }

  return (
    <>
        <Navbar/>
        <div className='flex flex-col items-center'>
        <div className='flex mt-28'>
          <div>Back</div>
          <div>Search Page</div>
        </div>
          <div className='mt-12 w-[50%]'>
          <input className='border border-black pl-2 w-[100%] h-10 rounded-sm' type='text' placeholder='Search' onChange={handleChange} value={searchTerm}/> 
        </div>
        <div>
          <button className='m-4 border border-black ' onClick={resRoutes}>Restaurants</button>
          <button className='m-4 border border-black' onClick={cusRoutes}>Cuisines</button>
        </div>
        <div className='w-[50%] h-44 mt-6 border border-black flex flex-col overflow-y-auto scroll-smooth'>
          <ul>
            {
              routes === 'res' ?
              (
                searchResults && 
                searchResults.map((item)=>(
                  <Link to={`/restaurant/${item[1]}`}>
                    <li className='border border-black m-2 hover:scale-95' key={item[1]}>{item[0]}</li>
                  </Link>
                ))
              )
              :
              (
                searchResults && 
                searchResults.map((item, index)=>(
                  <Link to={`/fooditem/${item}`}>
                    <li className='border border-black m-2 hover:scale-95' key={index}>{item}</li>
                  </Link>
                ))
              )
            }
          </ul>
        </div>
        </div>
    </>
  )
}

export default Search