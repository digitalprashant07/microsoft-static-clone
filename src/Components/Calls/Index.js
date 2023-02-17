import React from 'react';
import './Calls.css'
import Header from '../Common/header/Header';
import Sidebar from '../Common/Sidebar/Sidebar';
import LeftFold from './left-fold/LeftFold';
import RightFold from './right-fold/RightFold';

function Calls() {
  return (
    <div className='calls-container'>
      <Header />
      <div className='calls-body'>
        <div className='calls-sidebar'>
          <Sidebar />
        </div>
        <div className='calls-leftfold'>
          <LeftFold />
        </div>
        <div className='calls-rightfold'>
          <RightFold />
        </div>
      </div>
    </div>
  )
}

export default Calls;

