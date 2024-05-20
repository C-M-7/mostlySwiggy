import React, { useState } from 'react'

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  
    return (
    <>
        <div className='flex flex-col'>
            <div className='flex border-2 p-2 rounded-sm justify-between'>
                <div>Title here</div>   
                <button onClick={() => setIsOpen(!isOpen)}>open</button>
            </div>
            <div className={`${ isOpen===false ? 'hidden'  : 'block'} p-2`}>
                <div>Content1</div>
                <div>Content1</div>
                <div>Content1</div>
                <div>Content1</div>
            </div>
            <hr className='border-4 mt-2'/>
        </div>
    </>
  )
}

export default Accordion