import React from 'react'
import './testimonial.css'
import AVTAR1 from '../../assets/Screenshot 2023-03-24 193721.png'
import AVTAR2 from '../../assets/AvatarMaker.png'
import AVTAR3 from '../../assets/AvatarMaker (1).png'
import AVTAR4 from '../../assets/avataaars (2).png'
import {Navigation,Pagination} from'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  avtar: AVTAR1 ,
  name: 'Sylar' ,
  review: 'I have had the pleasure of working with Aarti, on several web development projects, and I can confidently say that she is an exceptional front-end developer. Her attention to detail and dedication to creating seamless user experiences is truly impressive!'
},
{
  avtar: AVTAR2 ,
  name: 'Sandra' ,
  review: 'One thing that sets [Aarti,] apart is her ability to turn complex designs into functional, user-friendly websites. She has a deep understanding of HTML, CSS, and JavaScript, and she is always up-to-date with the latest web development trends and technologies.'
},
{
  avtar: AVTAR3 ,
  name: 'Marta' ,
  review: 'I have seen [Aarti,] tackle some challenging front-end development projects with ease, and her passion for coding is truly inspiring. She is also a great team player, always willing to collaborate and offer her expertise to ensure that the final product is of the highest quality.'
},
{
  avtar: AVTAR4 ,
  name: 'Kirsty' ,
  review: 'If you are looking for a skilled and experienced front-end developer who is committed to delivering exceptional results, I highly recommend [Aarti,]. She is an invaluable asset to any web development team, and I look forward to working with her on future projects.'
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