import React from 'react'
import './Ratings.css';

const Ratings = () => {
  return (
    <div className='rating mb-32'>
      <h3 className='mb-10'>Rating By</h3>

      <div className="row">
      <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">All</label>
            </div>

            <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Evoque Innovative Lab</label>
            </div>

            <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Lorem Ipsum  </label>
            </div>

            <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Lorem Ipsum  </label>
            </div>

            <div className="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Lorem Ipsum  </label>
            </div>
        
      </div>
    </div>
  )
}

export default Ratings
