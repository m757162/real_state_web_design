import React from "react";

import img from '../assets/template-list/01_AppertmentZ.png' 
import img2 from '../assets/template-list/02_AppertmentZ.png' 
import img3 from '../assets/template-list/03_AppertmentZ.png' 

import {Link} from 'react-router-dom'
const pageList = () => {
    
  return (
    <>
    <section class="pageList d-flex h-100 align-items-center">
    <div class="container-fluid  mt-3">
          <div className="h1 htext">Choose What You Need</div>
        <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 mt-3">
          <div class="col">
            <div class="list-card">
              <img src={img} alt="" srcset="" />
              <div className="h5 mt-3"><Link to="/home-1">Template 1</Link></div>
            </div>
          </div>
          <div class="col">
            <div class="list-card">
              <img src={img2} alt="" srcset="" />
              <div className="h5 mt-3"><Link to="/home-2">Template 2</Link></div>

            </div>
          </div>
          <div class="col">
            <div class="list-card">
              <img src={img3} alt="" srcset="" />
              <div className="h5 mt-3"><Link to="/home-3">Template 3</Link></div>

            </div>
          </div>
        </div>
      </div>
    
    </section>
     
    </>
  );
};

export default pageList;
