import React from 'react'
import './Sidebar.css';
import {Developed,Ratings,Application} from '../../components';

const Sidebar = () => {
  return (
    <div>
    <div className='mb-40'>
          <input type="text" placeholder='Search for products' />
    </div>
    <Developed/>
      <Ratings/>
    <Application/>
    </div>
  )
}

export default Sidebar
