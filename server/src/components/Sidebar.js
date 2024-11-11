import React from 'react';
import './Sidebar.css';
import first_logo from '../assets/images/image_logo.png';
import second_logo from '../assets/images/image_logo_two.png';
import third_logo from '../assets/images/image_logo_three.png'

function Sidebar() {
  return (
    <>
    <div className='sidebar'>
       <div className='sidebar_card_one'>
        <div className='sidebar-task_one'>
          <div className='sidebar-logo-image_one'>
            <img src={first_logo} className='image_logo'></img>
          </div>
          <p className='sidebar_title'>Expired Task</p>
          <h1>5</h1>
        </div>
       </div>
       <div className='sidebar_card_two'>
       <div className='sidebar-task_two'>
          <div className='sidebar-logo-image_two'>
            <img src={second_logo} className='image_logo'></img>
          </div>
          <p className='sidebar_title'>All Active Task</p>
          <h1>4</h1>
        </div>
       </div>
       <div className='sidebar_card_three'>
       <div className='sidebar-task_three'>
          <div className='sidebar-logo-image_three'>
            <img src={third_logo} className='image_logo'></img>
          </div>
          <p className='sidebar_title'>Completed Task</p>
          <h1>2/7</h1>
        </div>
       </div>
    </div>
    </>
  );
}

export default Sidebar;
