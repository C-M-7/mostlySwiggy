import React from 'react'
import { Link } from 'react-router-dom'

function MainCard({resName, resRating}) {
  return (
    <>
        <Link to='/restaurant' className='p-10 border border-black rounded-lg m-4 hover:scale-95 duration-100 cursor-pointer'>
            <div>MainCardImg</div>
            <div>{resName}</div>
            <div>{resRating}</div>
            <div>MainCardOutro1</div>
            <div>MainCardOutro2</div>
        </Link>
    </>
  )
}

export default MainCard