import React, { useEffect, useState } from 'react'
import './Cards.css';
import CardImg from '../cardImage/CardImg';


const Cards = ({data,renderStars }) => {
    // console.log(data);
    


  return (

    

    <div className='card-wrapper'>

     <div className="card-img">
            <CardImg data={data} renderStars={renderStars} />
        </div>
    <div className="card-content">
        <div className='details pb-21'>
                    {/* <h3>{data.applicationType}</h3> */}
                    <h3>{data.name}</h3>
                    <h5>{data.description}</h5>
        </div>
        <div className="pricing pb-21">
            <h3>Price:  ₹{data.price} <span>per smallcase (buy)</span> </h3>
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
