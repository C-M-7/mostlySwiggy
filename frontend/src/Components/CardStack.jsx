import React, { useState } from 'react'
import MainCard from './MainCard'
import FilterDialog from './FilterDialog';

function CardStack() {
  const [filterOpen, setFilter] = useState(false);

  const openFilter = () => setFilter(true);

  const closeFilter = () => setFilter(false);

  return (
    <>
        <div className='p-10'>
            <div className='text-xl font-bold'>Restaurants with online food delivery in YOUR_LOCATION</div>
            <div className='p-4'></div>
            <div className='flex space-x-12 pb-6'>
              <button className='border border-black rounded-3xl py-2 px-4' onClick={openFilter}>Filter</button>
              {
                  filterOpen && (
                    <FilterDialog filterOpen = {filterOpen} closeFilter={closeFilter}/>
                  )
              }
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
            </div>
            <div className='flex flex-wrap'>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
              <MainCard/>
            </div>
        </div>
    </>
  )
}

export default CardStack