import React from 'react'
import "./divider.css"

function Divider( {text} ) {
  return (
    <div className='divider'>
      <div className='divider__background bg-yellow section-margin'>
          <span className='divider__text tittle'>{text}</span>
      </div>
    </div>
  )
}

export default Divider;