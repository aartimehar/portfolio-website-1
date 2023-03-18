import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import{ImUser} from 'react-icons/im'
import{ImBook} from 'react-icons/im'
import{RiServiceFill} from 'react-icons/ri'
import{TbMessage} from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
<nav>
<a href="#" className={activeNav === '#' ? 'active': ''}><ImHome/></a>
<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} ><ImUser/></a>
<a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><ImBook/></a>
<a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceFill/></a>
<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><TbMessage/></a>
</nav>
  )
}

export default Nav