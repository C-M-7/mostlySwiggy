import React, { useState } from 'react'
import Navbar from '../mainPage/Navbar'
import { useSelector } from 'react-redux';

function Search() {
  const [searchTerm , setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const data = useSelector((state) => state.RestaurantsData);

  const handleChange = (event) =>{
    const term = event.target.value;
    setSearchTerm(term);
    const cuisines = data.map(cui => cui.cuisines.filter(item=>(
      item.toLowerCase() === term.toLowerCase()
    )));
    console.log(cuisines);
    const names = data.filter(n=>(n.name.toLowerCase() === term.toLowerCase()));
    console.log(names);
    const result = cuisines.concat(names);
    setSearchResults(result);
  }

  return (
    <>
        <Navbar/>
        <div className='flex flex-col items-center'>
        <div className='mt-40 w-[50%]'>
          <input className='border border-black pl-2 w-[100%] h-10 rounded-sm' type='text' placeholder='Search' onChange={handleChange} value={searchTerm}/> 
        </div>
        <div className='w-[50%] h-44 mt-10 border border-black flex flex-col overflow-y-auto scroll-smooth'>
          <ul>
            {
              searchResults &&
              searchResults.map((item, index)=>(
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
        </div>
    </>
  )
}

export default Search