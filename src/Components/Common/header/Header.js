import React from 'react';
import './header.css';
import { SiMicrosoftteams } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";




function Header() {
  return (
    <div className='header'>
      <div className='header-menu'>
        <SiMicrosoftteams />
      </div>
      <div className='header-leftfold'>
        <label className='header-label'>Microsoft Teams</label>
      </div>
      <div className='header-rightfold'>
        <div className='header-search'>
          <BsSearch />
          <input placeholder='search' />
        </div>
        <div className='header-profile'>
          <div className='header-options'>
            <SlOptions />
          </div>
          <img
            className='header-avtar'
            src="https://cdn-icons-png.flaticon.com/128/706/706807.png"
            alt='avtar'
          />
        </div>
      </div>
    </div>
  )
}

export default Header;
