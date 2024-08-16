import React, { useEffect, useState } from 'react'
import './Cards.css';
import CardImg from '../cardImage/CardImg';


const Cards = ({product}) => {
    console.log(product);
    


  return (

    

    <div className='card-wrapper'>

     <div className="card-img">
            <CardImg/>
        </div>
    <div className="card-content">
        <div className='details pb-21'>
                    <h3>Invest in ideas with Small case</h3>
                    <h5>Smallcases are investment products that help build a diversified, low-cost & long term portfolio.</h5>
        </div>
        <div className="pricing pb-21">
            <h3>Price:  ₹100 <span>per smallcase (buy)</span> </h3>
            <h5>Offer Price: <span className='free-card'>Free</span> for customers</h5>
        </div>

        <div className="card-btns d-flex">
            <a href="#" className='active'>View More Details</a>
            <a href="#">Open an Account</a>
        </div>
    </div>
    </div>
  )
}

export default Cards
