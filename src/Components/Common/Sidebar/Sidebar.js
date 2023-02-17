import React from 'react';
import './Sidebar.css';
import { SidebarData, SidebarMore, SidebarBotoom } from '../../../data/SidebarData';
import SidebarOption from './SidebarOption';


function Sidebar() {
  const topOptions = SidebarData;
  const more = SidebarMore;
  const bottomOptions = SidebarBotoom;
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div>
          {topOptions.map((option) => {
            return (
              <div>
                <SidebarOption
                  option={option}
                  isActive={option.name === 'Calls' ? true : false} />
              </div>
            )
          })}
        </div>
        <div> <SidebarOption option={more} /></div>
      </div>
      <div className='sidebar-bottom'>
        {bottomOptions.map((option) => {
          return (
            <div>
              <SidebarOption option={option} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar;
