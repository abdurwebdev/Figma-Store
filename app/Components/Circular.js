"use client"
import React from 'react'
import ReactCurvedText from 'react-curved-text';
const Circular = () => {
  return (
    <div className='relative'>
    <div className='absolute left-0'>
    <div className='flex items-center justify-center mr-9 md:justify-start   xl:justify-end'>
    <ReactCurvedText width='300'
  height='300'
  cx={150}
  cy={150}
  rx={100}
  ry={100}
  startOffset={0}
  reversed={false}
  text='FUND REFORESTRATION 100% OF PROFIT  LEARNS MORE'
  textProps={{"style": {"fontSize": 24}}}
  textPathProps={null}
  tspanProps={null}
  ellipseProps={null}
  svgProps={{ "className": "rotating-curved-text" }} />
      </div>
  </div>
  </div>
  )
}

export default Circular