import React from 'react'
import { Link } from 'react-router-dom'

function MainCard() {
  return (
    <>
        <Link to='/restaurant' className='p-10 border border-black rounded-lg m-4 hover:scale-95 duration-100 cursor-pointer'>
            <div>MainCardImg</div>
            <div>MainCardHeading</div>
            <div>MainCardRatings</div>
            <div>MainCardOutro1</div>
            <div>MainCardOutro2</div>
        </Link>
    </>
  )
}

export default MainCard