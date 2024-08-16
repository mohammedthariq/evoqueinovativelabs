import React from 'react'
import './Application.css';

const Application = ({category,setCategory}) => {

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <div className='application mb-32'>
        <h3 className='mb-10'>Application Type</h3>

        <div className="row">
        <div className="form-check">
            <input type="radio" value="" checked={category === ''} onChange={handleCategoryChange}  className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">All</label>
            </div>


            <div className="form-check">
            <input type="radio"  value="Web based applications"  checked={category === 'Web based applications'}  onChange={handleCategoryChange} className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Web based applications  </label>
            </div>

            <div className="form-check">
            <input type="radio"  value="Mobile applications"   checked={category === 'Mobile applications'}  onChange={handleCategoryChange} className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Mobile applications</label>
            </div>
          

          
        
        </div>
      </div>
    </div>
  )
}

export default Application

