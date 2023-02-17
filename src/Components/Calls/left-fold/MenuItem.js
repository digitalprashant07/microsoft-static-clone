import React from 'react';
import './MenuItem.css';

function MenuItem({item, isActive}) {
    const ClassList = isActive? "item-active menu-item":"menu-item";
  return (
    <div className={ClassList}>
      <div className='item-icon'>{item.icon}</div>
      <label className='item-label'>{item.name}</label>
    </div>
  )
}

export default MenuItem
