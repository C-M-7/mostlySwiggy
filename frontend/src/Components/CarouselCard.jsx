import React from 'react'

function CarouselCard({cName, cPic}) {
  return (
    <>
        <div className='px-4'>
            <div>CarouselPic</div>
            <div>CarouselName</div>
            <div>{cPic}</div>
            <div>{cName}</div>
        </div>
    </>
  )
}

export default CarouselCard