import React from 'react'
import ForeGround from './Components/ForeGround'
import HeadingsComponents from './Components/HeadingsComponents'
import CardsHolder from './Components/CardsHolder'



const page = () => {

  return (
    <div className='overflow-hidden'>
      <ForeGround/>
      <HeadingsComponents/>
      <CardsHolder/>
    </div>
  )
}

export default page