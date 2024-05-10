import React from 'react'
import "./feature.css"

function Feature({ img, text }) {
  return (
    <div className='feature bg-img section-margin' >
      <p className='tittle'>{text}</p>
    </div>
  )
}

export default Feature
