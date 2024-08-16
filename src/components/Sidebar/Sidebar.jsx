import React, { useState } from 'react'
import './Sidebar.css';
import {Developed,Ratings,Application} from '../../components';



const Sidebar = ({ search, setSearch, category, setCategory }) => {

  return (
    <div>
    <div className='mb-40'>
    <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    {/* <Developed/> */}
      {/* <Ratings/> */}
    <Application category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Sidebar
