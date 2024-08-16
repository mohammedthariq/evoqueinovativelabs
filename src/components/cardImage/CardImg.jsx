import React from 'react';
import './CardImg.css';

const CardImg = ({ data, renderStars }) => {
  return (
    <div className='cardimage'>
      <div className="free">Free</div>
      <div className='green'>
        <img src="https://i.postimg.cc/vHDSc9bw/greenbg.png" alt="" />
      </div>
      <div className='inner-img'>
        <img src={data.productImage} alt="" />
      </div>
      <div className='star d-flex justify-content-center align-items-center'>
        <div className='stars'>{renderStars(data.rating)}</div>
        <span className='review'>({data.review_count} reviews)</span>
      </div>
    </div>
  );
}

export default CardImg;
