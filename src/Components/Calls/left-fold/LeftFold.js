import React from 'react';
import './LeftFold.css';
import { CallsMenu, DialerList } from '../../../data/CallsData';
import MenuItem from './MenuItem';
import DialerItem from './DialerItem';

function LeftFold() {
  const menu = CallsMenu;
  const dialerList = DialerList;
  return (
    <div className='leftfold'>
      <div className='leftfold-menu'>
        <label className='menu-label'>Calls</label>
        <div className='menu-items'>
          {menu.map((item) => {
            return (
              <div> <MenuItem item={item} /> </div>
            )
          })}
        </div>
      </div>
      <div className='leftfold-dialer'>
        <label className='dialer-label'>Make a Call</label>
        <div className='dialer-search'>
          <input placeholder='Type a name' />
        </div>
        <div className='dialer-suggested'>
          <label className='suggested-label'>Suggested</label>
          <div className='suggested-list'>
            {dialerList.map((item) => {
              return (
                <div>
                  <DialerItem item={item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftFold;
