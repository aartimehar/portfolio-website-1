import React from 'react'
import './testimonial.css'
import AVTAR1 from '../../assets/My project.png'
import AVTAR2 from '../../assets/My project.png'
import AVTAR3 from '../../assets/My project.png'
import AVTAR4 from '../../assets/My project.png'
import {Navigation,Pagination} from'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  avtar: AVTAR1 ,
  name: 'tina snow' ,
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti voluptatem consequatur nesciunt! Corrupti dolorem dolorum ad autem earum quia architecto. Dignissimos explicabo omnis, praesentium sapiente ad ea quia eveniet!'
},
{
  avtar: AVTAR2 ,
  name: 'lina snow' ,
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti voluptatem consequatur nesciunt! Corrupti dolorem dolorum ad autem earum quia architecto. Dignissimos explicabo omnis, praesentium sapiente ad ea quia eveniet!'
},
{
  avtar: AVTAR3 ,
  name: 'kina snow' ,
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti voluptatem consequatur nesciunt! Corrupti dolorem dolorum ad autem earum quia architecto. Dignissimos explicabo omnis, praesentium sapiente ad ea quia eveniet!'
},
{
  avtar: AVTAR4 ,
  name: 'pina snow' ,
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates deleniti voluptatem consequatur nesciunt! Corrupti dolorem dolorum ad autem earum quia architecto. Dignissimos explicabo omnis, praesentium sapiente ad ea quia eveniet!'
},

]

const Testimonials = () => {
  return (
    <section id = 'testimonials'>
    <h5>Review from Clients</h5>
    <h2>Testimonials</h2>

    <Swiper className = "container container_testmonial"
     // install Swiper modules
     modules={[ Navigation,Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}> 
   
    
    {
      data.map (({avtar, name, review} , index) => {
        return(
          <SwiperSlide key = {index} className='testimonial'>
          <div className='client_avatar'>
            <img src= {avtar} alt = "Avtar_1" />
            </div>
            <h5 className='client_name'> {name}</h5>
            <small className='reviewfromclient'>
              {review}
            </small>
            </SwiperSlide>

        )
      })
  }
    </Swiper>
    </section>
  )
}

export default Testimonials