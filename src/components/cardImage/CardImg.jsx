import React from 'react'
import './CardImg.css';

const CardImg = () => {
  return (
    <div className='cardimage '>
        <div className="free">Free</div>
       <div className='green'>
         <img src="https://i.postimg.cc/vHDSc9bw/greenbg.png" alt="" />
       </div>
      <div className='inner-img'>
          <img src="https://i.postimg.cc/g0BxcfDW/card-1.png" alt="" />
      </div>
      <div className='star'>
          <img src="https://i.postimg.cc/9FTgd2RL/la-star.png" alt="" /> <span>(20 reviews)</span>
      </div>
    </div>
  )
}   

export default CardImg
