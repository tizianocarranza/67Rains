import React from 'react'
import "./collection.css"
import { col1, col2, col3, col4 } from "../../assets/collection/index"

function Collection() {
  return (

    <div className='collection section-margin'>
      
      <p className='tittle'><span className='tittle bg-yellow'>Spring 2024</span> collection</p>

      <div className='collection__wrapper'>
        <div className='collection__container-left'>
          <img src={col1} alt="image" />
        </div>
        <div className='collection__container-right'>
          <div className='collection__container-top-right'>
            <img src={col2} alt="image" />
            <img src={col1} alt="image" />
            <img src={col3} alt="image" />
          </div>
          <div className='collection__container-bottom-right'>
            <img id="imgA" src={col4} alt="image" />
            <img id="imgB" src={col4} alt="image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
