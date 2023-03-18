import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import{ImUser} from 'react-icons/im'
import{ImBook} from 'react-icons/im'
import{RiServiceFill} from 'react-icons/ri'
import{GrContact} from 'react-icons/gr'
const Nav = () => {
  return (
<nav>
<a href="#home"><ImHome/></a>
<a href="#about"><ImUser/></a>
<a href="experience"><ImBook/></a>
<a href="services"><RiServiceFill/></a>
<a href="contact"><GrContact/></a>
</nav>
  )
}

export default Nav