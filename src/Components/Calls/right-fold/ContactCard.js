import React from 'react';
import './ContactCard.css';
import { BiMicrophone } from "react-icons/bi";
import { RxVideo } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";


function ContactCard({ item }) {
  return (
    <div className='contact-card'>
      <div className='contact-top'>
        <img src={item.avtar} className="contact-avtar" alt='avtar' />
        <div className="contact-info">
          <label className='contact-title'>{item.name}</label>
          <label className='contact-subtitle'>{item.type}</label>
        </div>
      </div>
      <div className='contact-icons'>
        <div className='contact-icon'>
          <BiMicrophone />
        </div>
        <div className='contact-icon'>
          <RxVideo />
        </div>
        <div className='contact-icon'>
          <BsThreeDots />
        </div>
      </div>
    </div>
  )
}

export default ContactCard;
