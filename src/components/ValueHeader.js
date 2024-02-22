import React from 'react'
import '../styles/ValueHeader.css'

function ValueHeader({userid}) {
  return (
    <div className='valueHeader'>
        <div className='left'>
            <p>User: {userid}</p>
            <p>Total Games: XXX </p>
            <p>Total</p>
        </div>
        <div className='right'>
            <label>Value per Hour: </label>
            <input type='text' />
        </div>
    </div>
  )
}

export default ValueHeader
