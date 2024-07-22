import React from 'react'
import loader from '../../Utils/Loader.gif'

function Loader() {
  return (
    <div className="z-60 flex items-center justify-center h-screen w-screen">
        <img className='h-40 w-60' alt='loader_gif' src={loader}/>
    </div>
  )
}

export default Loader