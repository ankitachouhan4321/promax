import React from 'react';
import ContactForm from '../components/ContactForm';
import Breadcrumb from '../components/Breadcrumb'

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />

      <ContactForm/>

      <div className="promax-map-wrapper">
        <iframe
          title="Promax India Pvt Ltd Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1500000.718796909!2d71.92446956790575!3d20.71817969738274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.5!3m3!1m2!1s0x390d03d9f5f01685%3A0x174c58c699e5d713!2sProMax%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1795092732766!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
       
      </div>
    </>
  )
}

export default Contact
