import React from 'react'

function FilterDialog({filterOpen, closeFilter}) {
  return (
    <>
        <div className='z-30 fixed inset-0 flex items-center justify-center'>
          <div className='flex justify-around'>
            <div className='font-bold'>Filter</div>
            <div>Close</div>
          </div>
        </div>
    </>
  )
}

export default FilterDialog