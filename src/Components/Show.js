import React from 'react'

const Show = ({tas}) => {
  return (
    <>
   <ul>
   {
        tas.map((item,index)=>(
            <li key={index} className='p-1 text-md text-success'>{item}</li>
        ))
      }
   </ul>
    </>
  )
}

export default Show
