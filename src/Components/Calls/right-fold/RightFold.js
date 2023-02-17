import React from 'react';
import './RightFold.css';
import { BsSearch } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { CallsContact } from '../../../data/CallsData';
import ContactCard from './ContactCard';



function RightFold() {
  const contacts = CallsContact;
  return (
    <div className='rightfold'>
      <div className='rightfold-heading'>
        <label className='heading-label'>Contacts</label>
      </div>

      <div className='rightFold-options'>
        <div className='contact-search'>
          <input placeholder='Find a contact' />
          <div className='contact-search-icon'>
            <BsSearch />
          </div>
          </div>
          <div className='add-button'>
            <div className='add-icon'>
              <BiUserPlus />
            </div>
            <label className='add-label'>Add Contact</label>
          </div>
        </div>
      <div className='contact-list'>
        {contacts.map((item) => {
          return(
              <ContactCard item={item}/>
          )
        })}
      </div>
    </div>
  )
}

export default RightFold;
