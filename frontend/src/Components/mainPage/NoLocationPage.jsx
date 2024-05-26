import React from 'react'
import noLocationImage from '../../Utils/noLocation.jpg'

function NoLocationPage() {
  return (
    <div className='w-screen h-screen'>
        <img alt='No Location Image' className='ml-[25%] w-[50%] h-screen' src={noLocationImage}/>
    </div>
  )
}

export default NoLocationPage