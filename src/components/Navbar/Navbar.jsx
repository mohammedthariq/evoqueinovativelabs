import React, { useState } from 'react'
import './Navbar.css';


const Navbar = () => {

    const [isActive ,setIsActive] = useState(false);
  return (
  <>
      <nav className='wrapper'>
              <a href="#" className='logo'>
              Evoque Innovative Lab
              </a>
    
              <ul>
                  <li>
                      <a href="#">About</a>
                  </li>
                  <li>
                      <a href="#">Marketplace</a>
                  </li>
                  <li>
                      <a href="#">Resources</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
              </ul>
    
             
    
    
              <div className='access '>
                  <a href="#">Login</a>
                  <a href="#" className='active'>Sign Up</a>
                  <span onClick={()=>setIsActive(true)} className='nav-span'>
                      <i class="fa-solid  fa-bars"></i>
                  </span>
              </div>
                  
      </nav>
    
    
      <div className={`mobile-menu-container container ${isActive ? "active" : ""}`}>
          <div  onClick={()=>setIsActive(false)} className="close-icon ">
          <span className='close-span'>
                  <i class="fa-solid fa-xmark"></i>
                  </span>
          </div>

          <ul className='menu-items'>
                  <li>
                      <a href="#about">About</a>
                  </li>
                  <li>
                      <a href="#marketplace">Marketplace</a>
                  </li>
                  <li>
                      <a href="#resource">Resources</a>
                  </li>
                  <li>
                      <a href="#contact">Contact</a>
                  </li>
              </ul>

      </div>
  </>
  )
}

export default Navbar
