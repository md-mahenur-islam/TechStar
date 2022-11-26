import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/coding.jpg";
import img2 from "../Assets/developer.jpg"
import img3 from "../Assets/development.jpg"
import img4 from "../Assets/imac.jpg"

import '../Styles/services.scss'

const Services = () => {
  return (
    <div className='services' >
        <Carousel
        infiniteLoop autoPlay = {true} showStatus =  {false} showArrows= {true} interval = {1000}
        showThumbs={false}
        showIndicators = {true}
        >
            <div>
                <img src = {img1} alt = "coding"/>
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src = {img2} alt = "coding"/>
                <p className='legend'>Peer-to-peer support</p>
            </div>
            <div>
                <img src = {img3} alt = "coding"/>
                <p className='legend'>Peer-to-peer support</p>
            </div>
            <div>
                <img src = {img4} alt = "coding"/>
                <p className='legend'>Peer-to-peer support</p>
            </div>

        </Carousel>

    </div>
  )
}

export default Services