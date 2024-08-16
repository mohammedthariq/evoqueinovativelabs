import React from 'react'
import './Application.css';

const Application = () => {
  return (
    <div>
      <div className='application mb-32'>
        <h3 className='mb-10'>Application Type</h3>

        <div className="row">
        <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">All</label>
            </div>


            <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Web based applications  </label>
            </div>

            <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Mobile applications</label>
            </div>
          

          
        
        </div>
      </div>
    </div>
  )
}

export default Application

