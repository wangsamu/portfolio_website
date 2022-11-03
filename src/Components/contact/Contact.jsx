import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  ContactContainer,
  ContactForm,
  ContactIconContainer,
  ContactOption,
  ContactOptionsContainer,
} from './ContactStyled';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hhbbu7z',
        'template_400x2du',
        form.current,
        'SAQP_Tp4ekMBPzpWa'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <h2>Contact</h2>

      <ContactContainer>
        <ContactOptionsContainer>
          {/* LinkedIn */}
          <ContactOption>
            <ContactIconContainer>
              <BsLinkedin />
            </ContactIconContainer>
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/wangsamu/' target='_blank'>
              Connect{' '}
            </a>
          </ContactOption>
          {/* Github */}
          <ContactOption>
            <ContactIconContainer>
              <BsGithub />
            </ContactIconContainer>
            <h4>Github</h4>
            {/* <h5>@wangsamu</h5> */}
            <a href='https://github.com/wangsamu' target='_blank'>
              Connect
            </a>
          </ContactOption>
          {/* Email */}
          <ContactOption>
            <ContactIconContainer>
              <HiOutlineMail />
            </ContactIconContainer>
            <h4>Email</h4>
            <h5>mail@wangsamu.com</h5>
            <a href='mailto:mail@wangsamu.com' target='_blank'>
              Send an email
            </a>
          </ContactOption>
        </ContactOptionsContainer>

        <ContactForm ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Mesasage'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </ContactForm>
      </ContactContainer>
    </section>
  );
};

export default Contact;
