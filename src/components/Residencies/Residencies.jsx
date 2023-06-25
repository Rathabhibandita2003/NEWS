import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
function Residencies() {
  return (
    <section className="r-wrapper">
    <div className="padding innerWidth r-container">
        <div className="r-head flexColStart">
            <span className='orangeText'>Highlighted</span><span className='primaryText'>News and Documentaries</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton/>
            { data.map((card, i)=>(
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src= {card.image} alt="home" />
                    <span className='secondaryText r-price'></span>
                    <span style={{color:"orange"}}>*</span><span>{card.price}</span>
                    <span className="primaryText">{card.price}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))
            }
        </Swiper>
    </div>
    </section>
  )
}

export default Residencies;

const SliderButton = ()=>{
  return (
    <div className="r-button">
      
    </div>
  )
}