import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import './header1.css'

const HeaderSocialsMedia = () => {
  return (
    <div className='header_SocialsMedia'>
       <a href="https://www.linkedin.com/in/aartimeherchandani/" > <ImLinkedin />  </a>
       <a href="https://github.com/aartimehar/" > <ImGithub />  </a>
       <a href="https://twitter.com/aartimaher" > <ImTwitter />  </a>
  </div>
  )
}

export default HeaderSocialsMedia