import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {BsLinkedin} from 'react-icons/bs'
import { useRef as UseRef } from "react";
import emailjs from 'emailjs-com';


export const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kknpi8j', 'template_a2oysjk', form.current, 'xKZ9wKe1Fxu7nbwKG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
   

  return (
    <section id= 'contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container container_contact">
      <div className="contact_options">


      <article className="contact_option">
      <HiOutlineMail className='contact_icon'/>
      <h4>
      <a href = "mailto:lyhxr@example.com">Email</a>
      </h4>
      </article>


      <article className="contact_option">
      <BiMessageAltDetail className='contact_icon' />
      <h4>
      <a href = "https://react-icons.github.io/react-icons/search?q=email">Message</a>
      </h4>
      </article>

      <article className="contact_option">
      <BsLinkedin className='contact_icon' />
      <h3><a href = "https://www.linkedin.com/in/aartimeherchandani/">Linkedin</a>
      </h3>
      </article>
      </div>

      {/* End of Contact Options  */}
<form id = "contact-form" ref={form} onSubmit={sendEmail}>
<input type= "text" name = 'name' placeholder= 'Your full name' required />
<input type= "email" name = 'email' placeholder= 'Your email' required />
<textarea name ="message" rows = "7" placeholder= 'Your message' required></textarea>
<button type= 'submit' className='btn btn-primary'>Send Message</button>
</form>
</div>
</section>
)
};

export default contact