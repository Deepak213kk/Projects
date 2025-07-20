import React from 'react'
import "./First.css";
export const First = () => {
  return (
    <>
    <div className='main'>
    <div className='haider'>
        <h1> The Chart maker </h1>
    </div>
    <div className='bod'>
        <div className='inp'>
            <h1> User</h1>
            <input type="text" className='i1' placeholder='Enter first sub'/>
            <input type="text" className='i1' placeholder='Enter second sub'/>
            <input type="text" className='i1' placeholder='Enter third sub'/>
        </div>
        <div className='res'>
            <h1>
                result
            </h1>
        </div>
    </div>
    </div>
   
    </>
  )
}
