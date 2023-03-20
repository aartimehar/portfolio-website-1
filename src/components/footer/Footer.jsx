import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer> 
<a href="#" className='footer-logo'>Aarti</a>
<ul className='permlinks'>
  <li><a href='#'>Home</a></li>
  <li><a href='#about'>about</a></li>
  <li><a href='#experience'>experience</a></li>
  <li><a href='#services'>services</a></li>
  <li><a href='#portfolio'>portfolio</a></li>
  <li><a href='#testimonials'>testimonials</a></li>
  <li><a href='#contacts'>contacts</a></li>
</ul>

<div className='footer_social'>
<a href= "https://en-gb.facebook.com/"><BsFacebook/></a>
<a href= "https://www.instagram.com/"><BsInstagram/></a>
<a href= "https://twitter.com/aartimaher"><BsTwitter/></a>
</div>

<div className="copyright-footer">
  <small>&copy;Aarti Meharchandani.All rights reserved </small>
</div>
</footer>
  )
}

export default Footer