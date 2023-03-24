import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import './header.css'

const HeaderSocialsMedia = () => {
  return (
    <div className='header_SocialsMedia'>
       <a href="https://www.linkedin.com/in/aartimeherchandani/" target= "_blank"> <ImLinkedin />  </a>
       <a href="https://github.com/aartimehar/" target= "_blank"> <ImGithub />  </a>
       <a href="https://twitter.com/aartimaher" target= "_blank"> <ImTwitter />  </a>
  </div>
  )
}

export default HeaderSocialsMedia