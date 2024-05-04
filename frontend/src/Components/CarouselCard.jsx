import React from 'react'
import { Link } from 'react-router-dom'

function CarouselCard({cName, cPic}) {
  return (
    <>
        <Link to='/fooditem' className='px-4'>
            <div>CarouselPic</div>
            <div>CarouselName</div>
            <div>{cPic}</div>
            <div>{cName}</div>
        </Link>
    </>
  )
}

export default CarouselCard