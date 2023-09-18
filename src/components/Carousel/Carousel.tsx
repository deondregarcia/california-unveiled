import React, { memo } from 'react'
import './Carousel.css';

import { CountyObjectLoader } from '../../assets/CountyObjectLoader';

const Carousel = () => {

  console.log(CountyObjectLoader.Kern);

  return (
    <div className='carousel-container'>
      {CountyObjectLoader.Kern.map((county) => {
        return (
         <div className='carousel-card'>
          <img src={county.image} alt={`${county.name} location`} />
         </div>
        )
      })}
    </div>
  )
}

export default memo(Carousel);