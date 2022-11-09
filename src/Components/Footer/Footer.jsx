import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return <>
    <footer className='py-3 bgDiff'>
      <div className="container-fluid container-md">
        <div className="row">
          <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start">
            <div className="copyRight mb-3 mb-sm-0">
              <p className='mb-0 fw-bold'>Copyright <i className="far fa-copyright"></i> 2022.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="social d-flex justify-content-center justify-content-sm-end">
              <Link to="#" className='mx-2 p-2 fa-lg fa-bounce'><i className="fab fa-facebook-f fa-fw"></i></Link>
              <Link to="#" className='mx-2 p-2 fa-lg fa-bounce'><i className="fab fa-twitter fa-fw"></i></Link>
              <Link to="#" className='mx-2 p-2 fa-lg fa-bounce'><i className="fab fa-instagram fa-fw"></i></Link>
              <Link to="#" className='mx-2 p-2 fa-lg fa-bounce'><i className="fab fa-dribbble fa-fw"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer