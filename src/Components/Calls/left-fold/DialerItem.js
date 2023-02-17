import React from 'react';
import './DialerItem.css';
import { BiMicrophone } from "react-icons/bi";
import { RxVideo } from "react-icons/rx";



function DialerItem({ item }) {

  return (
    <div className='dialer-item'>
      <img src={item.avtar} className="item-avtar" alt='avtar'/>
      <div className='item-info'>
        <label className='item.title'>{item.name}</label>
        <label className='item-subtitle'>{item.type}</label>
      </div>
      <div className='item-icons'>
        <div className='item-icon'> <BiMicrophone/></div>
        <div className='item-icon'><RxVideo/></div>
      </div>
    </div>
  )
}

export default DialerItem;
